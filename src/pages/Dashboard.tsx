import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  MessageSquare, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  User,
  Mail,
  Phone
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('tickets');
  const [tickets, setTickets] = useState([
    {
      id: 'TK-001',
      title: 'Transaction not received',
      status: 'pending',
      date: '2024-01-15',
      priority: 'high'
    },
    {
      id: 'TK-002', 
      title: 'Cash Card activation issue',
      status: 'responded',
      date: '2024-01-14',
      priority: 'medium'
    },
    {
      id: 'TK-003',
      title: 'Account verification help',
      status: 'resolved',
      date: '2024-01-12',
      priority: 'low'
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    priority: 'medium',
    message: ''
  });

  // Load tickets from localStorage on component mount
  useEffect(() => {
    const savedTickets = localStorage.getItem('supportTickets');
    if (savedTickets) {
      setTickets(JSON.parse(savedTickets));
    }
  }, []);

  // Save tickets to localStorage whenever tickets change
  useEffect(() => {
    localStorage.setItem('supportTickets', JSON.stringify(tickets));
  }, [tickets]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newTicket = {
      id: `TK-${String(tickets.length + 1).padStart(3, '0')}`,
      title: formData.subject,
      status: 'pending',
      date: new Date().toISOString().split('T')[0],
      priority: formData.priority
    };

    setTickets([newTicket, ...tickets]);
    setFormData({
      name: '',
      email: '',
      subject: '',
      priority: 'medium',
      message: ''
    });
    setActiveTab('tickets');
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'responded':
        return <MessageSquare className="w-4 h-4" />;
      case 'resolved':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-orange-100 text-orange-800';
      case 'responded':
        return 'bg-blue-100 text-blue-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Support Dashboard</h1>
            <p className="text-muted-foreground">Manage your support tickets and get help</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="shadow-card border-0">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    className="w-full justify-start" 
                    variant={activeTab === 'new' ? 'default' : 'ghost'}
                    onClick={() => setActiveTab('new')}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    New Ticket
                  </Button>
                  <Button 
                    className="w-full justify-start" 
                    variant={activeTab === 'tickets' ? 'default' : 'ghost'}
                    onClick={() => setActiveTab('tickets')}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    My Tickets
                  </Button>
                  <Button 
                    className="w-full justify-start" 
                    variant={activeTab === 'profile' ? 'default' : 'ghost'}
                    onClick={() => setActiveTab('profile')}
                  >
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {activeTab === 'tickets' && (
                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle>My Support Tickets</CardTitle>
                    <CardDescription>
                      Track the status of your support requests
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {tickets.map((ticket) => (
                        <div key={ticket.id} className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-smooth">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                              <span className="font-mono text-sm text-muted-foreground">{ticket.id}</span>
                              <h3 className="font-semibold text-foreground">{ticket.title}</h3>
                            </div>
                            <Badge className={getPriorityColor(ticket.priority)}>
                              {ticket.priority}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>{ticket.date}</span>
                            </div>
                            <Badge className={getStatusColor(ticket.status)}>
                              {getStatusIcon(ticket.status)}
                              <span className="ml-1 capitalize">{ticket.status}</span>
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeTab === 'new' && (
                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle>Submit New Support Request</CardTitle>
                    <CardDescription>
                      Describe your issue and we'll get back to you soon
                    </CardDescription>
                  </CardHeader>
                   <CardContent>
                     <form className="space-y-6" onSubmit={handleSubmit}>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div className="space-y-2">
                           <Label htmlFor="name">Full Name</Label>
                           <Input 
                             id="name" 
                             placeholder="Enter your full name" 
                             value={formData.name}
                             onChange={handleInputChange}
                             required
                           />
                         </div>
                         <div className="space-y-2">
                           <Label htmlFor="email">Email Address</Label>
                           <Input 
                             id="email" 
                             type="email" 
                             placeholder="Enter your email" 
                             value={formData.email}
                             onChange={handleInputChange}
                             required
                           />
                         </div>
                       </div>
                       
                       <div className="space-y-2">
                         <Label htmlFor="subject">Subject</Label>
                         <Input 
                           id="subject" 
                           placeholder="Brief description of your issue" 
                           value={formData.subject}
                           onChange={handleInputChange}
                           required
                         />
                       </div>
                       
                       <div className="space-y-2">
                         <Label htmlFor="priority">Priority Level</Label>
                         <select 
                           id="priority"
                           className="w-full p-2 border border-input rounded-md bg-background"
                           value={formData.priority}
                           onChange={handleInputChange}
                         >
                           <option value="low">Low - General question</option>
                           <option value="medium">Medium - Account issue</option>
                           <option value="high">High - Payment problem</option>
                           <option value="urgent">Urgent - Security concern</option>
                         </select>
                       </div>
                       
                       <div className="space-y-2">
                         <Label htmlFor="message">Detailed Description</Label>
                         <Textarea 
                           id="message" 
                           rows={6}
                           placeholder="Please provide as much detail as possible about your issue..."
                           value={formData.message}
                           onChange={handleInputChange}
                           required
                         />
                       </div>
                       
                       <Button 
                         type="submit"
                         className="w-full md:w-auto bg-primary hover:bg-primary-glow"
                       >
                         Submit Request
                       </Button>
                     </form>
                   </CardContent>
                </Card>
              )}

              {activeTab === 'profile' && (
                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>
                      Update your contact details for better support
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="profile-name">Full Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                            <Input id="profile-name" className="pl-10" defaultValue="John Doe" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="profile-email">Email Address</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                            <Input id="profile-email" type="email" className="pl-10" defaultValue="john@example.com" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="profile-phone">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                          <Input id="profile-phone" className="pl-10" defaultValue="+1 (555) 123-4567" />
                        </div>
                      </div>
                      
                      <Button className="bg-primary hover:bg-primary-glow">
                        Update Profile
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;