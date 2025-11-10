import React, { useState, useMemo } from 'react';
import RoleBasePage from './RoleBasePage';
import { initialUsers, doctors } from '../data/dummyData';
import { User } from '../types';
import UserModal from '../components/UserModal';
import { motion, AnimatePresence } from 'framer-motion';

const AdminPage: React.FC = () => {
    const [users, setUsers] = useState<User[]>(initialUsers);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userToEdit, setUserToEdit] = useState<User | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const nextId = useMemo(() => {
        // Recalculate nextId whenever users array changes.
        return users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
    }, [users]);
    
    const handleAddUser = () => {
        setUserToEdit(null);
        setIsModalOpen(true);
    };

    const handleEditUser = (user: User) => {
        setUserToEdit(user);
        setIsModalOpen(true);
    };

    const handleDeleteUser = (userId: number) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            setUsers(currentUsers => currentUsers.filter(user => user.id !== userId));
        }
    };

    const handleSaveUser = (user: User) => {
        if (userToEdit) {
            // Use functional update to avoid stale state
            setUsers(currentUsers => currentUsers.map(u => (u.id === user.id ? user : u)));
        } else {
            // Use functional update to avoid stale state
            setUsers(currentUsers => [...currentUsers, { ...user, id: nextId }]);
        }
    };
    
    const filteredUsers = useMemo(() => {
        return users.filter(user =>
            user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.role.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [users, searchTerm]);
    
    const getRoleClass = (role: string) => {
        switch (role) {
            case 'Admin': return 'bg-red-100 text-red-800';
            case 'Doctor': return 'bg-blue-100 text-blue-800';
            case 'User': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <RoleBasePage title="Admin Dashboard">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                    <input
                        type="text"
                        placeholder="Search by name, email, or role..."
                        className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    <motion.button
                        onClick={handleAddUser}
                        className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        Add New User
                    </motion.button>
                </div>

                <motion.div 
                    className="overflow-x-auto hidden md:block"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
                                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Appointment</th>
                                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned Doctor</th>
                                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <motion.tbody className="divide-y divide-gray-200" variants={containerVariants}>
                            {filteredUsers.map(user => (
                                <motion.tr key={user.id} className="hover:bg-gray-50" variants={itemVariants}>
                                    <td className="py-4 px-4 whitespace-nowrap"><div className="font-medium text-gray-900">{user.fullName}</div><div className="text-sm text-gray-500">{user.gender}</div></td>
                                    <td className="py-4 px-4 whitespace-nowrap"><div className="text-sm text-gray-900">{user.email}</div><div className="text-sm text-gray-500">{user.phoneNumber}</div></td>
                                    <td className="py-4 px-4 whitespace-nowrap"><span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleClass(user.role)}`}>{user.role}</span></td>
                                    <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-700">{user.appointmentTime}</td>
                                    <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-700">{user.assignedDoctor}</td>
                                    <td className="py-4 px-4 whitespace-nowrap text-sm font-medium">
                                        <button onClick={() => handleEditUser(user)} className="text-primary hover:text-primary-dark mr-4">Edit</button>
                                        <button onClick={() => handleDeleteUser(user.id)} className="text-red-600 hover:text-red-800">Delete</button>
                                    </td>
                                </motion.tr>
                            ))}
                        </motion.tbody>
                    </table>
                </motion.div>
                 <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {filteredUsers.map(user => (
                        <motion.div key={user.id} className="bg-white p-4 rounded-lg shadow-md border border-gray-200 space-y-3" variants={itemVariants}>
                            <div>
                                <p className="font-bold text-lg text-gray-800">{user.fullName}</p>
                                <p className="text-sm text-gray-500">{user.gender}</p>
                            </div>
                             <div>
                                <p className="text-sm text-gray-700">{user.email}</p>
                                <p className="text-sm text-gray-500">{user.phoneNumber}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleClass(user.role)}`}>{user.role}</span>
                            </div>
                             <div>
                                <p className="text-sm font-semibold text-gray-600">Appointment:</p>
                                <p className="text-sm text-gray-800">{user.appointmentTime}</p>
                            </div>
                             <div>
                                <p className="text-sm font-semibold text-gray-600">Doctor:</p>
                                <p className="text-sm text-gray-800">{user.assignedDoctor}</p>
                            </div>
                            <div className="flex space-x-2 pt-2 border-t mt-3">
                                <button onClick={() => handleEditUser(user)} className="text-sm w-full bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600">Edit</button>
                                <button onClick={() => handleDeleteUser(user.id)} className="text-sm w-full bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600">Delete</button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <AnimatePresence>
                {isModalOpen && (
                    <UserModal 
                        isOpen={isModalOpen} 
                        onClose={() => setIsModalOpen(false)} 
                        onSave={handleSaveUser}
                        userToEdit={userToEdit}
                        doctors={doctors}
                        nextId={nextId}
                    />
                )}
            </AnimatePresence>
        </RoleBasePage>
    );
};

export default AdminPage;