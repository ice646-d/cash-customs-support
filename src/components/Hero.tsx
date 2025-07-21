import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';
import heroImage from '@/assets/hero-support.jpg';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-primary-glow/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Welcome to the official{' '}
              <span className="text-primary">Cash App</span>{' '}
              Support Center
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Get Help Fast — Secure support for all your payment needs, 24/7
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-glow text-lg px-8 py-6 hover-lift"
              >
                Get Help Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 hover-lift"
              >
                Contact Us
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Secure</h3>
                <p className="text-sm text-muted-foreground">Bank-level security</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Fast</h3>
                <p className="text-sm text-muted-foreground">Quick responses</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Trusted</h3>
                <p className="text-sm text-muted-foreground">Millions of users</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <img
                src={heroImage}
                alt="Cash App Support"
                className="w-full h-auto rounded-2xl shadow-card hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;