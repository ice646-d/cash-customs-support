import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Send, 
  Bitcoin, 
  CreditCard, 
  PiggyBank, 
  TrendingUp,
  Users,
  Globe,
  Award
} from 'lucide-react';

const About = () => {
  const services = [
    { icon: Send, title: 'Send Money', description: 'Instant transfers to friends and family' },
    { icon: Bitcoin, title: 'Bitcoin', description: 'Buy, sell, and store cryptocurrency' },
    { icon: CreditCard, title: 'Cash Card', description: 'Free debit card with boosts and rewards' },
    { icon: PiggyBank, title: 'Direct Deposit', description: 'Get paid up to 2 days early' },
  ];

  const stats = [
    { icon: Users, value: '70M+', label: 'Active Users' },
    { icon: Globe, value: '190+', label: 'Countries Served' },
    { icon: TrendingUp, value: '$1.8B+', label: 'Monthly Volume' },
    { icon: Award, value: '4.8/5', label: 'App Store Rating' },
  ];

  return (
    <Layout>
      <div className="pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About Cash App
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Cash App is a fast, simple way to send, spend, and invest your money. 
              With millions of users around the world, our goal is to make personal 
              finance easy, secure, and accessible to everyone.
            </p>
          </div>

          {/* Services */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover-lift transition-smooth shadow-card border-0">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Trusted by Millions
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission */}
          <Card className="bg-gradient-to-r from-primary/5 to-primary-glow/5 border-0 shadow-card">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                To redefine the world's relationship with money by making financial 
                services more inclusive, efficient, and accessible to everyone, everywhere.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default About;