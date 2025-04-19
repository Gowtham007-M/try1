
import { createContext, useContext, useState, ReactNode } from 'react';

export interface UserRegistration {
  eventId: number;
  eventName: string;
  registrationDate: string;
  ticketId: string;
  paymentAmount: number;
  paymentCurrency: string;
  registrationType?: string; // Added registration type
}

export interface User {
  name: string;
  email: string;
  isLoggedIn: boolean;
  phone?: string;
  registrations?: UserRegistration[];
  isAdmin?: boolean;
}

interface UserContextType {
  user: User | null;
  login: (userData: Omit<User, 'isLoggedIn'>) => void;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
  addRegistration: (registration: UserRegistration) => void;
  getAllRegistrations: () => UserRegistration[];
}

// Sample registrations for South Indian users
const sampleRegistrations: {user: Omit<User, 'isLoggedIn'>, registration: UserRegistration}[] = [
  {
    user: {
      name: "Venkatesh Iyer",
      email: "venkatesh.iyer@gmail.com",
      phone: "+91 9876543210",
    },
    registration: {
      eventId: 1,
      eventName: "Tech Conference 2025",
      registrationDate: "2025-02-15T08:30:00Z",
      ticketId: "TC2025-VKI",
      paymentAmount: 999,
      paymentCurrency: "INR",
      registrationType: "Early Bird"
    }
  },
  {
    user: {
      name: "Priya Sundaram",
      email: "priya.s@outlook.com",
      phone: "+91 9876123450",
    },
    registration: {
      eventId: 2,
      eventName: "Marketing Summit",
      registrationDate: "2025-03-10T10:15:00Z",
      ticketId: "MS2025-PSUN",
      paymentAmount: 899,
      paymentCurrency: "INR",
      registrationType: "Regular"
    }
  },
  {
    user: {
      name: "Karthik Rajan",
      email: "karthik.r@yahoo.com",
      phone: "+91 9871234560",
    },
    registration: {
      eventId: 3,
      eventName: "Design Workshop",
      registrationDate: "2025-01-25T09:45:00Z",
      ticketId: "DW2025-KRJ",
      paymentAmount: 799,
      paymentCurrency: "INR",
      registrationType: "Student"
    }
  },
  {
    user: {
      name: "Lakshmi Nair",
      email: "lakshmi.n@hotmail.com",
      phone: "+91 9876543211",
    },
    registration: {
      eventId: 4,
      eventName: "Web Development Conference",
      registrationDate: "2025-02-28T14:20:00Z",
      ticketId: "WDC2025-LKN",
      paymentAmount: 949,
      paymentCurrency: "INR",
      registrationType: "VIP"
    }
  }
];

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    // Check if user data exists in localStorage
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  
  // Initialize sample users data in localStorage if not present
  useState(() => {
    if (!localStorage.getItem('allUsers')) {
      const allUsers = sampleRegistrations.map(item => ({
        ...item.user,
        isLoggedIn: false,
        registrations: [item.registration]
      }));
      // Add admin user
      allUsers.push({
        name: "Admin User",
        email: "admin@sessionspark.com",
        isLoggedIn: false,
        isAdmin: true,
        registrations: []
      });
      localStorage.setItem('allUsers', JSON.stringify(allUsers));
    }
  });

  const login = (userData: Omit<User, 'isLoggedIn'>) => {
    const newUser = { 
      ...userData, 
      isLoggedIn: true,
      registrations: userData.registrations || [] 
    };
    setUser(newUser);
    // Save to localStorage
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateUser = (updates: Partial<User>) => {
    if (!user) return;
    
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const addRegistration = (registration: UserRegistration) => {
    if (!user) return;
    
    const updatedRegistrations = [...(user.registrations || []), registration];
    const updatedUser = { ...user, registrations: updatedRegistrations };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    
    // Also update in allUsers
    const allUsers = JSON.parse(localStorage.getItem('allUsers') || '[]');
    const userIndex = allUsers.findIndex(u => u.email === user.email);
    if (userIndex !== -1) {
      allUsers[userIndex].registrations = updatedRegistrations;
      localStorage.setItem('allUsers', JSON.stringify(allUsers));
    }
  };
  
  const getAllRegistrations = () => {
    const allUsers = JSON.parse(localStorage.getItem('allUsers') || '[]');
    // Flatten all registrations with user info
    return allUsers.reduce((acc, user) => {
      if (user.registrations && user.registrations.length > 0) {
        return [...acc, ...user.registrations];
      }
      return acc;
    }, []);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, updateUser, addRegistration, getAllRegistrations }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
