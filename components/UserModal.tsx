import React, { useState, useEffect } from 'react';
import { User, Doctor, Role, Gender } from '../types';
import { motion } from 'framer-motion';

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (user: User) => void;
  userToEdit: User | null;
  doctors: Doctor[];
  nextId: number;
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSave, userToEdit, doctors, nextId }) => {
  const initialUserState: User = {
    id: nextId,
    fullName: '',
    email: '',
    phoneNumber: '',
    role: 'User',
    gender: 'Other',
    address: '',
    appointmentTime: '',
    assignedDoctor: doctors[0]?.name || '',
  };

  const [user, setUser] = useState<User>(initialUserState);

  useEffect(() => {
    if (userToEdit) {
      setUser(userToEdit);
    } else {
      setUser({ ...initialUserState, id: nextId, assignedDoctor: doctors[0]?.name || ''});
    }
  }, [userToEdit, isOpen, nextId, doctors]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(user);
    onClose();
  };
  
  // Note: AnimatePresence must be used in the parent component (AdminPage)
  // to handle the exit animation.
  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{userToEdit ? 'Edit User' : 'Add New User'}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="fullName" value={user.fullName} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={user.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">Phone Number</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">Role</label>
              <select id="role" name="role" value={user.role} onChange={handleChange} className="w-full px-3 py-2 border rounded-md bg-white">
                <option value="User">User</option>
                <option value="Doctor">Doctor</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">Gender</label>
              <select id="gender" name="gender" value={user.gender} onChange={handleChange} className="w-full px-3 py-2 border rounded-md bg-white">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="appointmentTime">Appointment Time</label>
              <input type="datetime-local" id="appointmentTime" name="appointmentTime" value={user.appointmentTime.replace(' ', 'T')} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div className="md:col-span-2 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Address</label>
              <input type="text" id="address" name="address" value={user.address} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" required />
            </div>
            <div className="md:col-span-2 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="assignedDoctor">Assigned Doctor</label>
              <select id="assignedDoctor" name="assignedDoctor" value={user.assignedDoctor} onChange={handleChange} className="w-full px-3 py-2 border rounded-md bg-white">
                {doctors.map(doc => <option key={doc.id} value={doc.name}>{doc.name} - {doc.department}</option>)}
              </select>
            </div>
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <button type="button" onClick={onClose} className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-md hover:bg-gray-300">Cancel</button>
            <button type="submit" className="bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-primary-dark">Save</button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default UserModal;