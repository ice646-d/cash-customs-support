import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  UserX, 
  AlertTriangle, 
  Clock, 
  CreditCard, 
  Lock, 
  HelpCircle,
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const CommonIssues = () => {
  const issues = [
    {
      icon: UserX,
      title: 'Login Issues',
      description: 'Trouble accessing your account or forgotten password',
      color: 'text-red-500 bg-red-50',
    },
    {
      icon: AlertTriangle,
      title: 'Scam Report',
      description: 'Report suspicious activity or fraudulent transactions',
      color: 'text-orange-500 bg-orange-50',
    },
    {
      icon: Clock,
      title: 'Transaction Delay',
      description: 'Missing or delayed payments and transfers',
      color: 'text-blue-500 bg-blue-50',
    },
    {
      icon: CreditCard,
      title: 'Cash Card Issues',
      description: 'Card activation, replacement, or transaction problems',
      color: 'text-primary bg-primary/10',
    },
    {
      icon: Lock,
      title: 'Account Security',
      description: 'Two-factor authentication and security settings',
      color: 'text-purple-500 bg-purple-50',
    },
    {
      icon: HelpCircle,
      title: 'General Support',
      description: 'Other questions about Cash App features and services',
      color: 'text-gray-500 bg-gray-50',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Common Issues
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quick solutions for the most frequently reported problems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {issues.map((issue, index) => (
            <Card 
              key={index} 
              className="hover-lift transition-smooth cursor-pointer border-0 shadow-card bg-card"
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${issue.color} mb-4`}>
                  <issue.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg font-semibold">{issue.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  {issue.description}
                </CardDescription>
                <Button 
                  variant="ghost" 
                  className="w-full justify-between group hover:bg-primary/5"
                >
                  Get Help
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="hover-lift"
          >
            View All Help Topics
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommonIssues;