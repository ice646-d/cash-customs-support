import Layout from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, HelpCircle, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      title: 'Account & Security',
      icon: '🔒',
      questions: [
        {
          question: 'How do I reset my Cash App password?',
          answer: 'To reset your password, open the Cash App and tap "Sign In", then tap "Forgot Password". Enter your email or phone number and follow the instructions sent to you.'
        },
        {
          question: 'How do I enable two-factor authentication?',
          answer: 'Go to your Cash App profile, tap "Privacy & Security", then "Two-Factor Authentication". Follow the prompts to set up SMS or app-based authentication.'
        },
        {
          question: 'What should I do if my account is locked?',
          answer: 'If your account is locked, contact our support team immediately. We\'ll help verify your identity and restore access to your account safely.'
        }
      ]
    },
    {
      title: 'Payments & Transfers',
      icon: '💸',
      questions: [
        {
          question: 'How long do Cash App transfers take?',
          answer: 'Standard transfers to your bank account take 1-3 business days. Instant transfers (for a small fee) are available immediately.'
        },
        {
          question: 'What are the sending limits on Cash App?',
          answer: 'Verified accounts can send up to $7,500 per week. Unverified accounts have lower limits. You can increase limits by verifying your identity.'
        },
        {
          question: 'Can I cancel a payment I already sent?',
          answer: 'Once a payment is sent, it cannot be cancelled. However, you can request the recipient to send the money back to you.'
        }
      ]
    },
    {
      title: 'Cash Card',
      icon: '💳',
      questions: [
        {
          question: 'How do I activate my Cash Card?',
          answer: 'Once you receive your Cash Card, open the Cash App, tap the Cash Card tab, and use your phone\'s camera to scan the QR code on your card.'
        },
        {
          question: 'What should I do if my Cash Card is lost or stolen?',
          answer: 'Immediately disable your card in the Cash App by going to the Cash Card tab and toggling it off. Then contact support to order a replacement.'
        },
        {
          question: 'How do Cash Card Boosts work?',
          answer: 'Boosts are instant discounts at select merchants. Activate a Boost in your Cash App before making a purchase with your Cash Card to get the discount.'
        }
      ]
    },
    {
      title: 'Bitcoin & Investing',
      icon: '₿',
      questions: [
        {
          question: 'How do I buy Bitcoin on Cash App?',
          answer: 'Tap the "Investing" tab in your Cash App, select Bitcoin, enter the amount you want to purchase, and confirm the transaction.'
        },
        {
          question: 'Are there fees for buying Bitcoin?',
          answer: 'Yes, Cash App charges a small fee for Bitcoin transactions. The fee varies based on market conditions and is shown before you confirm your purchase.'
        },
        {
          question: 'Can I transfer Bitcoin to an external wallet?',
          answer: 'Yes, verified users can withdraw Bitcoin to external wallets. Go to your Bitcoin balance and select "Withdraw Bitcoin" to get started.'
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <Layout>
      <div className="py-16 bg-muted/30 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find quick answers to common questions about Cash App
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search for answers..."
                className="pl-10 pr-4 h-12 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {(searchQuery ? filteredFAQs : faqCategories).map((category, categoryIndex) => (
              <Card key={categoryIndex} className="shadow-card border-0">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-xl">
                    <span className="text-2xl mr-3">{category.icon}</span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                        <AccordionTrigger className="text-left hover:text-primary">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {searchQuery && filteredFAQs.length === 0 && (
            <Card className="shadow-card border-0 text-center py-12">
              <CardContent>
                <HelpCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No results found
                </h3>
                <p className="text-muted-foreground mb-6">
                  We couldn't find any answers matching "{searchQuery}". Try different keywords or contact support.
                </p>
                <Button className="bg-primary hover:bg-primary-glow">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Contact Card */}
          <Card className="mt-12 bg-gradient-to-r from-primary/5 to-primary-glow/5 border-0 shadow-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Still need help?
              </h3>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary hover:bg-primary-glow">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Live Chat
                </Button>
                <Button variant="outline">
                  Submit a Request
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;