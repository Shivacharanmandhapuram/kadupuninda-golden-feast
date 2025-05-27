
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, Users, Star } from 'lucide-react';

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState('premium');
  const [selectedMeals, setSelectedMeals] = useState<string[]>([]);
  const [servings, setServings] = useState('2');
  const [deliveryDay, setDeliveryDay] = useState('');

  const subscriptionPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: '₹1,299',
      meals: 8,
      description: 'Perfect for couples or small families',
      features: ['8 meals per month', 'Free delivery', 'Flexible scheduling', 'Cancel anytime']
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: '₹1,999',
      meals: 12,
      description: 'Most popular choice for families',
      features: ['12 meals per month', 'Free delivery', 'Priority support', 'Recipe cards included', 'Cancel anytime'],
      popular: true
    },
    {
      id: 'family',
      name: 'Family Plan',
      price: '₹2,799',
      meals: 16,
      description: 'Ideal for larger families',
      features: ['16 meals per month', 'Free delivery', 'Priority support', 'Recipe cards included', 'Nutrition consultation', 'Cancel anytime']
    }
  ];

  const mealOptions = [
    { id: 'breakfast', name: 'Breakfast', icon: '🌅', items: ['Idli Sambar', 'Masala Dosa', 'Upma', 'Poha'] },
    { id: 'lunch', name: 'Lunch', icon: '☀️', items: ['South Indian Thali', 'Bisi Bele Bath', 'Lemon Rice', 'Vegetable Pulao'] },
    { id: 'dinner', name: 'Dinner', icon: '🌙', items: ['Akki Roti', 'Ragi Mudde', 'Coconut Rice', 'Mixed Vegetable Curry'] },
    { id: 'snacks', name: 'Snacks', icon: '🍪', items: ['Banana Chips', 'Coconut Laddu', 'Mysore Pak', 'Rava Kesari'] }
  ];

  const handleMealToggle = (mealId: string) => {
    setSelectedMeals(prev => 
      prev.includes(mealId) 
        ? prev.filter(id => id !== mealId)
        : [...prev, mealId]
    );
  };

  const selectedPlanDetails = subscriptionPlans.find(plan => plan.id === selectedPlan);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gold mb-6 ornamental-border">
            Monthly Meal Subscription
          </h1>
          <p className="text-xl text-warm-gold max-w-3xl mx-auto">
            Enjoy authentic South Indian meals delivered fresh to your doorstep with our customizable weekly plans
          </p>
        </div>

        <Tabs defaultValue="plans" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-deep-green border border-gold/20">
            <TabsTrigger value="plans" className="text-gold data-[state=active]:bg-gold data-[state=active]:text-forest-green">
              Choose Plan
            </TabsTrigger>
            <TabsTrigger value="customize" className="text-gold data-[state=active]:bg-gold data-[state=active]:text-forest-green">
              Customize Meals
            </TabsTrigger>
          </TabsList>

          <TabsContent value="plans" className="space-y-8">
            {/* Subscription Plans */}
            <div className="grid md:grid-cols-3 gap-6">
              {subscriptionPlans.map((plan) => (
                <Card 
                  key={plan.id} 
                  className={`relative cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedPlan === plan.id 
                      ? 'bg-gold/10 border-gold shadow-lg' 
                      : 'bg-deep-green border-gold/20 hover:border-gold'
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gold text-forest-green">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-playfair text-gold">{plan.name}</CardTitle>
                    <div className="text-4xl font-bold text-gold">{plan.price}</div>
                    <p className="text-warm-gold text-sm">{plan.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-warm-gold">
                        <Calendar className="h-4 w-4" />
                        <span>{plan.meals} meals per month</span>
                      </div>
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-warm-gold">
                          <Star className="h-4 w-4" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="mt-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value={plan.id} id={plan.id} />
                        <Label htmlFor={plan.id} className="text-gold font-semibold">
                          Select this plan
                        </Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="customize" className="space-y-8">
            {/* Meal Customization */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-deep-green border-gold/20">
                <CardHeader>
                  <CardTitle className="text-gold font-playfair">Customize Your Weekly Meals</CardTitle>
                  <p className="text-warm-gold">Select the meal categories you'd like to include in your subscription</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {mealOptions.map((category) => (
                    <div key={category.id} className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id={category.id}
                          checked={selectedMeals.includes(category.id)}
                          onCheckedChange={() => handleMealToggle(category.id)}
                        />
                        <Label 
                          htmlFor={category.id} 
                          className="text-gold font-semibold flex items-center space-x-2 cursor-pointer"
                        >
                          <span className="text-lg">{category.icon}</span>
                          <span>{category.name}</span>
                        </Label>
                      </div>
                      {selectedMeals.includes(category.id) && (
                        <div className="ml-6 grid grid-cols-2 gap-2">
                          {category.items.map((item, index) => (
                            <Badge key={index} variant="outline" className="text-warm-gold border-gold/30">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-deep-green border-gold/20">
                <CardHeader>
                  <CardTitle className="text-gold font-playfair">Delivery Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label className="text-gold font-semibold flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>Number of Servings</span>
                    </Label>
                    <Select value={servings} onValueChange={setServings}>
                      <SelectTrigger className="bg-forest-green border-gold/30 text-gold">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Person</SelectItem>
                        <SelectItem value="2">2 People</SelectItem>
                        <SelectItem value="3">3 People</SelectItem>
                        <SelectItem value="4">4 People</SelectItem>
                        <SelectItem value="5">5+ People</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-gold font-semibold flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>Preferred Delivery Day</span>
                    </Label>
                    <Select value={deliveryDay} onValueChange={setDeliveryDay}>
                      <SelectTrigger className="bg-forest-green border-gold/30 text-gold">
                        <SelectValue placeholder="Select delivery day" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monday">Monday</SelectItem>
                        <SelectItem value="tuesday">Tuesday</SelectItem>
                        <SelectItem value="wednesday">Wednesday</SelectItem>
                        <SelectItem value="thursday">Thursday</SelectItem>
                        <SelectItem value="friday">Friday</SelectItem>
                        <SelectItem value="saturday">Saturday</SelectItem>
                        <SelectItem value="sunday">Sunday</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            {selectedPlanDetails && (
              <Card className="bg-gold/10 border-gold">
                <CardHeader>
                  <CardTitle className="text-gold font-playfair">Your Subscription Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gold">Selected Plan:</h4>
                      <p className="text-warm-gold">{selectedPlanDetails.name} - {selectedPlanDetails.price}/month</p>
                      <p className="text-warm-gold">{selectedPlanDetails.meals} meals included</p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gold">Customizations:</h4>
                      <p className="text-warm-gold">Servings: {servings} {servings === '1' ? 'person' : 'people'}</p>
                      <p className="text-warm-gold">
                        Meal types: {selectedMeals.length > 0 ? selectedMeals.join(', ') : 'None selected'}
                      </p>
                      {deliveryDay && (
                        <p className="text-warm-gold">Delivery: Every {deliveryDay}</p>
                      )}
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-6 bg-gold text-forest-green hover:bg-warm-gold font-semibold py-3 text-lg"
                    disabled={selectedMeals.length === 0 || !deliveryDay}
                  >
                    Subscribe Now - {selectedPlanDetails.price}/month
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>

        {/* Add bottom padding for mobile */}
        <div className="md:hidden h-16"></div>
      </div>
    </div>
  );
};

export default Subscription;
