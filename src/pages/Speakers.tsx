
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Speakers = () => {
  // Sample speakers data
  const speakersData = [
    {
      id: 1,
      name: "Dr. Alex Rivera",
      title: "AI Research Director",
      company: "TechInnovate Labs",
      bio: "Leading researcher in artificial intelligence with over 15 years of industry experience.",
      topics: ["Artificial Intelligence", "Machine Learning", "Neural Networks"],
      image: null
    },
    {
      id: 2,
      name: "Prof. Sarah Chen",
      title: "Professor of Computer Science",
      company: "Stanford University",
      bio: "Award-winning educator specializing in emerging technologies and their applications.",
      topics: ["Future Technologies", "Ethics in AI", "Data Science"],
      image: null
    },
    {
      id: 3,
      name: "Marcus Johnson",
      title: "Business Strategy Consultant",
      company: "Global Ventures Inc.",
      bio: "Expert in business networking and digital transformation strategies for enterprise.",
      topics: ["Business Strategy", "Networking", "Digital Transformation"],
      image: null
    },
    {
      id: 4,
      name: "Dr. Olivia Patel",
      title: "Chief Innovation Officer",
      company: "Next Wave Technologies",
      bio: "Pioneer in digital transformation with focus on healthcare and finance sectors.",
      topics: ["Innovation", "Leadership", "Organizational Change"],
      image: null
    },
    {
      id: 5,
      name: "Prof. James Wilson",
      title: "Conference Chair",
      company: "International Tech Association",
      bio: "Distinguished leader with extensive experience coordinating international tech events.",
      topics: ["Conference Planning", "Technology Trends", "Global Collaboration"],
      image: null
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-conference-purple mb-4">Conference Speakers</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet our industry experts and thought leaders who will be sharing their knowledge and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {speakersData.map((speaker) => (
            <Card key={speaker.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Avatar className="h-24 w-24">
                    {speaker.image ? (
                      <AvatarImage src={speaker.image} alt={speaker.name} />
                    ) : (
                      <AvatarFallback className="bg-conference-purple/10 text-conference-purple text-xl">
                        {speaker.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    )}
                  </Avatar>
                </div>
                <CardTitle className="text-conference-purple">{speaker.name}</CardTitle>
                <CardDescription>
                  <p className="font-medium">{speaker.title}</p>
                  <p className="text-gray-500">{speaker.company}</p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{speaker.bio}</p>
                <div>
                  <h4 className="font-medium mb-2 text-gray-900">Speaking Topics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {speaker.topics.map((topic, index) => (
                      <span 
                        key={index} 
                        className="bg-conference-purple/10 text-conference-purple px-3 py-1 rounded-full text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Speaking Schedule</CardTitle>
            <CardDescription>When and where to catch our speakers</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Speaker</TableHead>
                  <TableHead>Session</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Location</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Dr. Alex Rivera</TableCell>
                  <TableCell>Opening Keynote</TableCell>
                  <TableCell>Day 1</TableCell>
                  <TableCell>9:00 AM - 10:00 AM</TableCell>
                  <TableCell>Main Hall</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Prof. Sarah Chen</TableCell>
                  <TableCell>Future of AI in Conferences</TableCell>
                  <TableCell>Day 1</TableCell>
                  <TableCell>10:30 AM - 11:30 AM</TableCell>
                  <TableCell>Room A</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Marcus Johnson</TableCell>
                  <TableCell>Networking Strategies</TableCell>
                  <TableCell>Day 1</TableCell>
                  <TableCell>1:00 PM - 2:00 PM</TableCell>
                  <TableCell>Room B</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Dr. Olivia Patel</TableCell>
                  <TableCell>Digital Transformation</TableCell>
                  <TableCell>Day 2</TableCell>
                  <TableCell>9:30 AM - 10:30 AM</TableCell>
                  <TableCell>Main Hall</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Prof. James Wilson</TableCell>
                  <TableCell>Closing Remarks</TableCell>
                  <TableCell>Day 2</TableCell>
                  <TableCell>4:00 PM - 5:00 PM</TableCell>
                  <TableCell>Main Hall</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Speakers;
