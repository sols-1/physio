
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface BookingData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message?: string;
  createdAt: Timestamp;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface ContactData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  createdAt: Timestamp;
  status: 'new' | 'replied';
}

export const saveBooking = async (bookingData: Omit<BookingData, 'createdAt' | 'status'>) => {
  try {
    const docRef = await addDoc(collection(db, 'bookings'), {
      ...bookingData,
      createdAt: Timestamp.now(),
      status: 'pending'
    });
    console.log('Booking saved with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error saving booking: ', error);
    throw error;
  }
};

export const saveContactForm = async (contactData: Omit<ContactData, 'createdAt' | 'status'>) => {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...contactData,
      createdAt: Timestamp.now(),
      status: 'new'
    });
    console.log('Contact form saved with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error saving contact form: ', error);
    throw error;
  }
};
