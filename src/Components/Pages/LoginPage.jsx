import React from "react";
import { X } from "lucide-react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
import People from "../../assets/images/people.jpeg";
import {useNavigate } from "react-router-dom"

export default function LoginPage() {
    const navigate = useNavigate();
  return (
    <div className="max-h-screen w-full bg-gradient-to-b from-[#E2E5E6] via-[#f7f3ea] to-[#ECE7CD] flex overflow-hidden">
      {/* Left Side - Form */}
      <div className="w-full lg:w-[55%] p-8 md:p-12 lg:p-16 flex flex-col">
        <div className="w-full max-w-md mx-auto flex-1">
          {/* Logo */}
          <div className="inline-block border border-gray-200 rounded-full px-6 py-2 mb-12">
            <span className="text-lg font-medium">Callback AI</span>
          </div>

          {/* Form */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-medium">Create an account</h1>
              <p className="text-gray-500">Sign up and get 30-day free trial</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full name</Label>
                <Input
                  id="fullName"
                  placeholder="Amélie Laurent"
                  className="h-12 bg-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="amelielaurent7622@gmail.com"
                  className="h-12 bg-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  className="h-12 bg-white"
                />
              </div>

              <Button onclick={() => navigate('/')} className="w-full h-12 text-base bg-[#ffd66c] hover:bg-[#ffd66c]/90 text-black">
                Submit
              </Button>
            </div>

            {/* Social Login */}
            <div className="flex gap-4">
              <Button variant="outline" className="flex-1 h-12 border-gray-300">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                Apple
              </Button>
              <Button variant="outline" className="flex-1 h-12 border-gray-300">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-sm text-gray-500 flex items-center justify-between">
            <div>
              Have an account?{" "}
              <a href="#" className="text-gray-900 underline">
                Sign in
              </a>
            </div>
            <a href="#" className="text-gray-900 underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="p-10 hidden lg:block relative flex-1 bg-transparent">
        <button className="z-10 absolute right-6 top-6 mb-5 ml-5 p-4 rounded-full bg-white/80 backdrop-blur">
          <X className="w-5 h-5" />
        </button>
        <img
          src={People}
          alt="Team collaboration"
          className="rounded-2xl h-full w-full object-cover"
        />
      </div>
    </div>
  );
}