import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x1080')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to Surf Shop</h1>
          <p className="mt-4 text-xl">Your one-stop shop for all surfing needs</p>
          <Button className="mt-8">Shop Now</Button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <Card key={index}>
              <img src="https://placehold.co/600x400" alt="placeholder" className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>Product Name {index + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>$99.99</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img src="https://placehold.co/600x400" alt="placeholder" className="w-full md:w-1/2 h-64 object-cover" />
          <div className="md:w-1/2">
            <p>
              Welcome to Surf Shop, your ultimate destination for all things surfing. Established in 2000, we have been providing top-quality surfing gear and accessories to enthusiasts around the world. Our mission is to promote the surfing lifestyle and ensure that every surfer has access to the best products available.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <img src="https://placehold.co/100x100" alt="placeholder" className="w-24 h-24 rounded-full mx-auto mt-4" />
                  <CardHeader>
                    <CardTitle>Customer {index + 1}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>"Surf Shop has the best products and amazing customer service. Highly recommend!"</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Newsletter Signup Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Stay Updated</h2>
        <div className="flex flex-col items-center">
          <p className="mb-4">Sign up for our newsletter to stay updated on the latest products and offers.</p>
          <div className="flex space-x-4">
            <Input type="email" placeholder="Enter your email" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4">
              <a href="/" className="hover:underline">Home</a>
              <a href="/shop" className="hover:underline">Shop</a>
              <a href="/contact" className="hover:underline">Contact Us</a>
              <a href="/about" className="hover:underline">About Us</a>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:underline">Facebook</a>
              <a href="#" className="hover:underline">Instagram</a>
              <a href="#" className="hover:underline">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;