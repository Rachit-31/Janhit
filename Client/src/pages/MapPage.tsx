import React, { useEffect, useState } from 'react';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMapEvents,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Issue marker icon
const issueIcon = new L.Icon({
    iconUrl,
    shadowUrl: iconShadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

// Live location marker icon
const liveLocationIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/64/64113.png',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
});

interface Issue {
    id: number;
    position: [number, number];
    description: string;
    votes: number;
    voted: boolean;
}

const MapPage: React.FC = () => {
    const [position, setPosition] = useState<[number, number] | null>(null);
    const [issues, setIssues] = useState<Issue[]>([
        // {
        //     id: 1,
        //     position: [31.469143, 76.268085],
        //     description: 'Pothole near Connaught Place',
        //     votes: 12,
        //     voted: false,
        // },
        // {
        //     id: 2,
        //     position: [31.485406, 76.228254],
        //     description: 'Broken street light in Karol Bagh',
        //     votes: 4,
        //     voted: false,
        // },
        {
            id: 1,
            position: [31.469143, 76.268085],
            description: 'Pothole near Connaught Place',
            votes: 12,
            voted: false,
          },
          {
            id: 2,
            position: [31.485406, 76.228254],
            description: 'Broken street light in Karol Bagh',
            votes: 4,
            voted: false,
          },
          {
              id: 3,
              position: [31.476361, 76.272485],
              description: 'Broken street light in Karol Bagh',
              votes: 10,
              voted: false,
          },
    ]);

    const [sortBy, setSortBy] = useState<'votes' | 'distance'>('votes');
    const [newIssuePos, setNewIssuePos] = useState<[number, number] | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [newIssueDesc, setNewIssueDesc] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => setPosition([pos.coords.latitude, pos.coords.longitude]),
            (err) => {
                console.error(err);
                setPosition([28.6139, 77.2090]); // fallback to Delhi
            }
        );
    }, []);

    const handleVoteToggle = (id: number) => {
        setIssues((prev) =>
            prev.map((issue) =>
                issue.id === id
                    ? {
                        ...issue,
                        votes: issue.voted ? issue.votes - 1 : issue.votes + 1,
                        voted: !issue.voted,
                    }
                    : issue
            )
        );
    };

    const AddIssueOnClick = () => {
        useMapEvents({
            click(e) {
                setNewIssuePos([e.latlng.lat, e.latlng.lng]);
                setShowModal(true);
            },
        });
        return null;
    };

    const handleAddIssue = () => {
        if (!newIssueDesc || !newIssuePos) return;
        setIssues((prev) => [
            ...prev,
            {
                id: Date.now(),
                position: newIssuePos,
                description: newIssueDesc,
                votes: 0,
                voted: false,
            },
        ]);
        setNewIssueDesc('');
        setShowModal(false);
        setNewIssuePos(null);
    };

    const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
        const toRad = (x: number) => (x * Math.PI) / 180;
        const R = 6371; // km
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) ** 2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
        return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
    };

    const sortedIssues = [...issues].sort((a, b) => {
        if (sortBy === 'votes') return b.votes - a.votes;
        if (position) {
            const distA = getDistance(position[0], position[1], a.position[0], a.position[1]);
            const distB = getDistance(position[0], position[1], b.position[0], b.position[1]);
            return distA - distB;
        }
        return 0;
    });

    return (
        <div className="min-h-screen bg-[#f9f9f9] p-4 relative">
            <h1 className="text-3xl font-bold text-center font-serif mb-6">Civic Issue Map</h1>

            {position ? (
                <>
                    <MapContainer
                        center={position}
                        zoom={13}
                        scrollWheelZoom
                        className="w-full h-[600px] rounded-lg shadow-lg mb-8 z-0"
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        />
                        <AddIssueOnClick />
                        <Marker position={position} icon={liveLocationIcon}>
                            <Popup>You are here</Popup>
                        </Marker>
                        {issues.map((issue) => (
                            <Marker key={issue.id} position={issue.position} icon={issueIcon}>
                                <Popup>
                                    <div className="text-sm">
                                        <p className="font-semibold">{issue.description}</p>
                                        <p>Votes: {issue.votes}</p>
                                        <button
                                            onClick={() => handleVoteToggle(issue.id)}
                                            className="mt-2 px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                                        >
                                            {issue.voted ? 'Remove Vote' : 'Vote'}
                                        </button>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>

                    {/* Sort & Table */}
                    <div className="max-w-4xl mx-auto">
                        <div className="flex justify-end mb-4">
                            <label className="text-sm font-medium mr-2">Sort by:</label>
                            <select
                                className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as 'votes' | 'distance')}
                            >
                                <option value="votes">Votes</option>
                                <option value="distance">Distance</option>
                            </select>
                        </div>

                        <div className="overflow-x-auto rounded-lg shadow">
                            <table className="min-w-full text-sm text-left text-gray-700 bg-white">
                                <thead className="bg-gray-200 uppercase text-xs tracking-wider text-gray-600">
                                    <tr>
                                        <th className="px-6 py-3">Description</th>
                                        <th className="px-6 py-3">Votes</th>
                                        <th className="px-6 py-3">Distance (km)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {sortedIssues.map((issue) => {
                                        const dist = position
                                            ? getDistance(position[0], position[1], issue.position[0], issue.position[1])
                                            : 0;

                                        return (
                                            <tr
                                                key={issue.id}
                                                className="hover:bg-blue-50 transition-colors duration-150"
                                            >
                                                <td className="px-6 py-4">{issue.description}</td>
                                                <td className="px-6 py-4">{issue.votes}</td>
                                                <td className="px-6 py-4">{dist.toFixed(2)}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </>
            ) : (
                <p className="text-center text-gray-600">Fetching your location...</p>
            )}

            {/* Modal for new issue */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-semibold mb-4">Report New Issue</h2>
                        <input
                            type="text"
                            placeholder="Enter issue description..."
                            value={newIssueDesc}
                            onChange={(e) => setNewIssueDesc(e.target.value)}
                            className="w-full border rounded px-3 py-2 mb-4"
                        />
                        <div className="flex justify-end space-x-2">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAddIssue}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Add Issue
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MapPage;
