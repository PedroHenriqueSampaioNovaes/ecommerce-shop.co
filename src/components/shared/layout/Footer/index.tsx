'use client';

import { Button, Input } from '@mui/material';
import Image from 'next/image';

import { Facebook, Github, Instagram, Mail, Twitter } from 'lucide-react';

import Brand from '../../Brand';
import Link from 'next/link';
import DividerUi from '../../ui/DividerUi';

export default function Footer() {
  return (
    <footer className="mt-20 relative before:bg-back-300 before:absolute before:inset-0 before:top-22.5 before:-z-10">
      <div className="container pb-22.5">
        <section className="bg-black py-9 px-16 flex justify-between items-center rounded-2.5xl overflow-hidden">
          <h4 className="uppercase text-white text-4xl text-balance">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h4>
          <form className="flex flex-col gap-3.5">
            <Input
              name="email"
              placeholder="Enter your email address"
              className="bg-white rounded-7.75xl px-4 py-3 before:content-none after:content-none"
              startAdornment={<Mail size={24} className="text-black/40 mr-3" />}
              type="email"
              slotProps={{ input: { className: 'py-0' } }}
            />
            <Button
              type="button"
              className="text-black bg-white rounded-7.75xl py-3 px-4 min-w-87.5 normal-case font-medium"
            >
              Subscribe to Newsletter
            </Button>
          </form>
        </section>

        <section className="flex justify-between mt-12.5">
          <div className="max-w-62.5">
            <Brand />
            <p className="mt-6 mb-8.5 text-black/60 text-sm">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex items-center gap-x-3">
              <span className="rounded-full border border-black/20 p-2 cursor-pointer">
                <Twitter color="#000" size={16} />
              </span>
              <span className="bg-black rounded-full border border-black p-2 cursor-pointer">
                <Facebook color="#fff" size={16} />
              </span>
              <span className="rounded-full border border-black/20 p-2 cursor-pointer">
                <Instagram color="#000" size={16} />
              </span>
              <span className="rounded-full border border-black/20 p-2 cursor-pointer">
                <Github color="#000" size={16} />
              </span>
            </div>
          </div>
          <div className="max-w-62.5">
            <h5 className="font-body font-medium uppercase tracking-[.1875rem] mb-6.5">
              Company
            </h5>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="mt-6 mb-8.5 text-black/60">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="mt-6 mb-8.5 text-black/60">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="mt-6 mb-8.5 text-black/60">
                  Works
                </Link>
              </li>
              <li>
                <Link href="#" className="mt-6 mb-8.5 text-black/60">
                  Career
                </Link>
              </li>
            </ul>
          </div>
          <div className="max-w-62.5">
            <h5 className="font-body font-medium uppercase tracking-[.1875rem] mb-6.5">
              Help
            </h5>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="mt-6 mb-8.5 text-black/60">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href="#" className="mt-6 mb-8.5 text-black/60">
                  Delivery Details
                </Link>
              </li>
              <li>
                <Link href="#" className="mt-6 mb-8.5 text-black/60">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="mt-6 mb-8.5 text-black/60">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="max-w-62.5">
            <h5 className="font-body font-medium uppercase tracking-[.1875rem] mb-6.5">
              Faq
            </h5>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="mt-6 mb-8.5 text-black/60">
                  Account
                </Link>
              </li>
              <li>
                <Link href="#" className="mt-6 mb-8.5 text-black/60">
                  Manage Deliveries
                </Link>
              </li>
              <li>
                <Link href="#" className="mt-6 mb-8.5 text-black/60">
                  Orders
                </Link>
              </li>
              <li>
                <Link href="#" className="mt-6 mb-8.5 text-black/60">
                  Payments
                </Link>
              </li>
            </ul>
          </div>
          <div className="max-w-62.5">
            <h5 className="font-body font-medium uppercase tracking-[.1875rem] mb-6.5">
              Resources
            </h5>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="mt-6 mb-8.5 text-black/60">
                  Free eBooks
                </Link>
              </li>
              <li>
                <Link href="#" className="mt-6 mb-8.5 text-black/60">
                  Development Tutorial
                </Link>
              </li>
              <li>
                <Link href="#" className="mt-6 mb-8.5 text-black/60">
                  How to - Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="mt-6 mb-8.5 text-black/60">
                  Youtube Playlist
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <DividerUi margin="mt-12.5 mb-6" />
        <div className="flex justify-between items-center">
          <p className="text-black/60">
            Shop.co © 2000-2026, All rights reserved
          </p>

          <div className="flex">
            <Image
              src="/badge/flag-cards/visa.png"
              alt="visacard"
              width={65}
              height={49}
            />
            <Image
              src="/badge/flag-cards/mastercard.png"
              alt="mastercard"
              width={65}
              height={49}
            />
            <Image
              src="/badge/flag-cards/paypal.png"
              alt="paypal"
              width={65}
              height={49}
            />
            <Image
              src="/badge/flag-cards/apple-pay.png"
              alt="apple pay"
              width={65}
              height={49}
            />
            <Image
              src="/badge/flag-cards/google-pay.png"
              alt="google pay"
              width={65}
              height={49}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
