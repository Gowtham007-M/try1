
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";

const Schedule = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const scheduleData = [
    {
      id: 1,
      title: "Opening Keynote",
      speaker: "Dr. Alex Rivera",
      time: "9:00 AM - 10:00 AM",
      room: "Main Hall",
      track: "General",
      day: "day1"
    },
    {
      id: 2,
      title: "Future of AI in Conferences",
      speaker: "Prof. Sarah Chen",
      time: "10:30 AM - 11:30 AM",
      room: "Room A",
      track: "Technology",
      day: "day1"
    },
    {
      id: 3,
      title: "Networking Strategies",
      speaker: "Marcus Johnson",
      time: "1:00 PM - 2:00 PM",
      room: "Room B",
      track: "Business",
      day: "day1"
    },
    {
      id: 4,
      title: "Digital Transformation",
      speaker: "Dr. Olivia Patel",
      time: "9:30 AM - 10:30 AM",
      room: "Main Hall",
      track: "Technology",
      day: "day2"
    },
    {
      id: 5,
      title: "Panel: Industry Insights",
      speaker: "Industry Leaders Panel",
      time: "11:00 AM - 12:30 PM",
      room: "Room A",
      track: "Business",
      day: "day2"
    },
    {
      id: 6,
      title: "Closing Remarks",
      speaker: "Prof. James Wilson",
      time: "4:00 PM - 5:00 PM",
      room: "Main Hall",
      track: "General",
      day: "day2"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-conference-purple mb-4">Conference Schedule</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse the complete conference program and plan your attendance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Select Date</CardTitle>
                <CardDescription>Choose a day to view sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Tabs defaultValue="day1" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="day1">Day 1</TabsTrigger>
                <TabsTrigger value="day2">Day 2</TabsTrigger>
              </TabsList>
              
              <TabsContent value="day1">
                <div className="space-y-6">
                  {scheduleData.filter(session => session.day === "day1").map((session) => (
                    <Card key={session.id}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl text-conference-purple">{session.title}</CardTitle>
                            <CardDescription className="text-gray-500">
                              Speaker: {session.speaker}
                            </CardDescription>
                          </div>
                          <span className="bg-conference-purple/10 text-conference-purple px-3 py-1 rounded-full text-sm font-medium">
                            {session.track}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                          <div className="flex items-center mb-2 sm:mb-0">
                            <span className="font-medium text-gray-700">Time:</span>
                            <span className="ml-2 text-gray-600">{session.time}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="font-medium text-gray-700">Location:</span>
                            <span className="ml-2 text-gray-600">{session.room}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="day2">
                <div className="space-y-6">
                  {scheduleData.filter(session => session.day === "day2").map((session) => (
                    <Card key={session.id}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl text-conference-purple">{session.title}</CardTitle>
                            <CardDescription className="text-gray-500">
                              Speaker: {session.speaker}
                            </CardDescription>
                          </div>
                          <span className="bg-conference-purple/10 text-conference-purple px-3 py-1 rounded-full text-sm font-medium">
                            {session.track}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                          <div className="flex items-center mb-2 sm:mb-0">
                            <span className="font-medium text-gray-700">Time:</span>
                            <span className="ml-2 text-gray-600">{session.time}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="font-medium text-gray-700">Location:</span>
                            <span className="ml-2 text-gray-600">{session.room}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Schedule;
