'use client'
import React from 'react'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

export default function HeadPage() {
  return (
    <div className="flex h-screen/2 w-full justify-between mt-5">
      <div className="flex justify-start mt-5 mb-5 ml-20 gap-20">
        <Popover>
          <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-active:text-white data-focus:outline data-focus:outline-white data-hover:text-white">
              Products
          </PopoverButton>
          <PopoverPanel
              transition
              anchor="bottom"
              className="divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0"
          >
              <div className="p-3">
              <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                  <p className="font-semibold text-white">Insights</p>
                  <p className="text-white/50">Measure actions your users take</p>
              </a>
              <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                  <p className="font-semibold text-white">Automations</p>
                  <p className="text-white/50">Create your own targeted content</p>
              </a>
              <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                  <p className="font-semibold text-white">Reports</p>
                  <p className="text-white/50">Keep track of your growth</p>
              </a>
              </div>
              <div className="p-3">
              <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                  <p className="font-semibold text-white">Documentation</p>
                  <p className="text-white/50">Start integrating products and tools</p>
              </a>
              </div>
          </PopoverPanel>
        </Popover>

        <Popover>
          <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-active:text-white data-focus:outline data-focus:outline-white data-hover:text-white">
              Solutions
          </PopoverButton>
          <PopoverPanel
              transition
              anchor="bottom"
              className="divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0"
          >
              <div className="p-3">
              <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                  <p className="font-semibold text-white">Insights</p>
                  <p className="text-white/50">Measure actions your users take</p>
              </a>
              <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                  <p className="font-semibold text-white">Automations</p>
                  <p className="text-white/50">Create your own targeted content</p>
              </a>
              <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                  <p className="font-semibold text-white">Reports</p>
                  <p className="text-white/50">Keep track of your growth</p>
              </a>
              </div>
              <div className="p-3">
              <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                  <p className="font-semibold text-white">Documentation</p>
                  <p className="text-white/50">Start integrating products and tools</p>
              </a>
              </div>
          </PopoverPanel>
        </Popover>

        <Popover>
          <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-active:text-white data-focus:outline data-focus:outline-white data-hover:text-white">
              Pricing
          </PopoverButton>
          <PopoverPanel
              transition
              anchor="bottom"
              className="divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0"
          >
              <div className="p-3">
              <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                  <p className="font-semibold text-white">Insights</p>
                  <p className="text-white/50">Measure actions your users take</p>
              </a>
              <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                  <p className="font-semibold text-white">Automations</p>
                  <p className="text-white/50">Create your own targeted content</p>
              </a>
              <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                  <p className="font-semibold text-white">Reports</p>
                  <p className="text-white/50">Keep track of your growth</p>
              </a>
              </div>
              <div className="p-3">
              <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                  <p className="font-semibold text-white">Documentation</p>
                  <p className="text-white/50">Start integrating products and tools</p>
              </a>
              </div>
          </PopoverPanel>
        </Popover>
      </div>

      <div className="flex justify-end mt-2 mb-2 mr-20">
          <w3m-button />
      </div>
    </div>
  )
}
