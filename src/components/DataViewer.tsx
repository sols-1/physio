
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Calendar, Mail, Phone, User, Clock, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getAllBookings, getAllContacts, BookingData, ContactData } from '@/services/firebaseService';

const DataViewer = () => {
  const { data: bookings, isLoading: bookingsLoading, refetch: refetchBookings } = useQuery({
    queryKey: ['bookings'],
    queryFn: getAllBookings,
  });

  const { data: contacts, isLoading: contactsLoading, refetch: refetchContacts } = useQuery({
    queryKey: ['contacts'],
    queryFn: getAllContacts,
  });

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  const handleRefresh = () => {
    refetchBookings();
    refetchContacts();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Firebase Data Viewer</h1>
          <p className="text-gray-600">View all bookings and contact submissions in ascending order</p>
          <Button onClick={handleRefresh} className="mt-4">
            Refresh Data
          </Button>
        </div>

        <Tabs defaultValue="bookings" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="bookings">
              Bookings ({bookings?.length || 0})
            </TabsTrigger>
            <TabsTrigger value="contacts">
              Contacts ({contacts?.length || 0})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bookings" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Booking Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                {bookingsLoading ? (
                  <div className="text-center py-8">Loading bookings...</div>
                ) : !bookings || bookings.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">No bookings found</div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Contact</TableHead>
                          <TableHead>Service</TableHead>
                          <TableHead>Appointment</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Created</TableHead>
                          <TableHead>Message</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {bookings.map((booking) => (
                          <TableRow key={booking.id}>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                <User size={16} />
                                <span>{booking.firstName} {booking.lastName}</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                <div className="flex items-center space-x-1 text-sm">
                                  <Mail size={12} />
                                  <span>{booking.email}</span>
                                </div>
                                <div className="flex items-center space-x-1 text-sm">
                                  <Phone size={12} />
                                  <span>{booking.phone}</span>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{booking.service}</TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                <div className="flex items-center space-x-1 text-sm">
                                  <Calendar size={12} />
                                  <span>{booking.date}</span>
                                </div>
                                <div className="flex items-center space-x-1 text-sm">
                                  <Clock size={12} />
                                  <span>{booking.time}</span>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                                booking.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {booking.status}
                              </span>
                            </TableCell>
                            <TableCell className="text-sm">
                              {formatDate(booking.createdAt)}
                            </TableCell>
                            <TableCell>
                              {booking.message ? (
                                <div className="flex items-center space-x-1">
                                  <MessageSquare size={12} />
                                  <span className="text-sm truncate max-w-xs" title={booking.message}>
                                    {booking.message}
                                  </span>
                                </div>
                              ) : (
                                <span className="text-gray-400 text-sm">No message</span>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contacts" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                {contactsLoading ? (
                  <div className="text-center py-8">Loading contacts...</div>
                ) : !contacts || contacts.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">No contacts found</div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Contact Info</TableHead>
                          <TableHead>Service</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Created</TableHead>
                          <TableHead>Message</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {contacts.map((contact) => (
                          <TableRow key={contact.id}>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                <User size={16} />
                                <span>{contact.name}</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                <div className="flex items-center space-x-1 text-sm">
                                  <Mail size={12} />
                                  <span>{contact.email}</span>
                                </div>
                                {contact.phone && (
                                  <div className="flex items-center space-x-1 text-sm">
                                    <Phone size={12} />
                                    <span>{contact.phone}</span>
                                  </div>
                                )}
                              </div>
                            </TableCell>
                            <TableCell>
                              {contact.service || <span className="text-gray-400">Not specified</span>}
                            </TableCell>
                            <TableCell>
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                contact.status === 'replied' ? 'bg-green-100 text-green-800' :
                                'bg-blue-100 text-blue-800'
                              }`}>
                                {contact.status}
                              </span>
                            </TableCell>
                            <TableCell className="text-sm">
                              {formatDate(contact.createdAt)}
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-1">
                                <MessageSquare size={12} />
                                <span className="text-sm truncate max-w-xs" title={contact.message}>
                                  {contact.message}
                                </span>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DataViewer;
