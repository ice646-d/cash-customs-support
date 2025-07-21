import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import CommonIssues from '@/components/CommonIssues';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MessageCircle, Phone, Mail } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <CommonIssues />
      
      {/* Search Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Search Help Articles
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Find answers to your questions instantly
          </p>
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search for help..."
              className="pl-12 pr-4 h-14 text-lg shadow-card border-0"
            />
            <Button className="absolute right-2 top-2 h-10 bg-primary hover:bg-primary-glow">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Multiple ways to get the help you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift transition-smooth shadow-card border-0 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Get instant help from our support team
                </p>
                <Button className="w-full bg-primary hover:bg-primary-glow">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift transition-smooth shadow-card border-0 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Phone Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Call us for urgent issues and account help
                </p>
                <Button variant="outline" className="w-full">
                  1-800-CASH-APP
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift transition-smooth shadow-card border-0 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Submit a detailed request and get a response
                </p>
                <Button variant="outline" className="w-full">
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
