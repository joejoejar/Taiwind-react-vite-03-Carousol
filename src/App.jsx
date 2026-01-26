import { useRef, useEffect } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

function App() {
  const mobileMenuRef = useRef(null)
  const profileMenuRef = useRef(null)

  useEffect(() => {
    // Ensure mobile menu is hidden on larger screens
    const handleResize = () => {
      const menu = mobileMenuRef.current
      if (menu) {
        if (window.innerWidth >= 640) { // sm breakpoint is 640px
          menu.classList.add('hidden')
        }
      }
    }

    // Close profile menu when clicking outside
    const handleClickOutside = (event) => {
      const profileMenu = profileMenuRef.current
      const profileButton = document.getElementById('profile-menu-button')

      if (profileMenu && profileButton &&
        !profileMenu.contains(event.target) &&
        !profileButton.contains(event.target)) {
        profileMenu.classList.add('hidden')
      }
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('mousedown', handleClickOutside)
    handleResize() // Check on mount

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>

      {/* Sample single-line comment in JSX */}
      {/* 
  Sample multi-line comment in JSX
  This is how you write comments in React/JSX
  You can write multiple lines like this
*/}

      {/* Include this script tag or install `@tailwindplus/elements` via npm: */}

      <nav className="sticky top-0 z-40 bg-slate-900 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" style={{ fontFamily: '"Apple Color Emoji"', backgroundClip: 'unset' }}>
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button - toggles the el-disclosure with id="mobile-menu" */}
              <button
                type="button"
                onClick={(e) => {
                  const menu = document.getElementById('mobile-menu')
                  if (menu) {
                    // Toggle visibility using Tailwind classes
                    menu.classList.toggle('hidden')
                  }
                }}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
                aria-label="Toggle mobile menu"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6 in-aria-expanded:hidden">
                  <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6 not-in-aria-expanded:hidden">
                  <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img src="src/assets/zen.png" alt="Your Company" className="h-8 w-auto brightness-0 invert" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* Current: "bg-gray-950/50 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" */}
                  <a href="#" aria-current="page" className="rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white">Dashboard</a>
                  <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Team</a>
                  <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Projects</a>
                  <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Calendar</a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button type="button" className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6">
                  <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {/* Profile dropdown */}
              <div className="relative ml-3">
                <button
                  id="profile-menu-button"
                  className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  onClick={(e) => {
                    const menu = document.getElementById('profile-menu')
                    if (menu) {
                      menu.classList.toggle('hidden')
                    }
                  }}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10" />
                </button>

                <div
                  ref={profileMenuRef}
                  id="profile-menu"
                  className="hidden absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 focus:bg-white/5">Your profile</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 focus:bg-white/5">Settings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 focus:bg-white/5">Sign out</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu - only visible on mobile screens */}
        <div
          ref={mobileMenuRef}
          id="mobile-menu"
          className="hidden sm:hidden border-t border-white/10"
        >
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a href="#" aria-current="page" className="block rounded-md bg-gray-950/50 px-3 py-2 text-base font-medium text-white">Dashboard</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Team</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Projects</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Calendar</a>
          </div>
        </div>
      </nav>

      {/* shadcn/ui Card test 
    <div className="mx-auto px-4 py-5">
    <Card className="relative mx-auto w-full max-w-sm pt-0 bg-blue-500 text-black">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src="src/assets/zen2.png"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle>Design systems meetup</CardTitle>
        <CardDescription>
          A practical talk on component APIs, accessibility, and shipping
          faster.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
  
    </div>

       */}


      <div id="agenda">
        <div className="mt-16 text-center">
          <h2 className="text-2xl  md:text-4xl font-bold dark:text-white">What You Will Learn</h2>
          <p className="text-gray-500 text-lg mt-4 mb-8 dark:text-gray-400 ">Topics that will be covered in this webinar</p>
        </div>

        <div className="flex flex-wrap justify-center mx-auto py-8 px-4 md:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="w-full sm:w-80 mb-4 rounded-lg bg-white shadow-lg ring-2 ring-transparent transition-colors hover:bg-blue-100 ">
              <img className="rounded-t-lg w-full h-48 sm:h-64 object-fill" src="src/assets/freepik.jpg" alt="" />
              <div className="py-4 px-6">

                <h2 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-xl sm:text-2xl tracking-tight">Front-End Development</h2>

                <p className="hover:cursor-pointer py-2 text-gray-600 leading-5">HTML, CSS, JavaScript, and frameworks like React and Vue.js - Learn to craft stunning user interfaces and create responsive websites that leave a lasting impression.</p>
              </div>
            </div>


            <div className="w-full sm:w-80 mb-4 rounded-lg bg-white shadow-lg ring-2 ring-transparent transition-colors hover:bg-blue-100 ">
              <img className="rounded-t-lg w-full h-48 sm:h-64 object-cover" src="src/assets/freepik2.jpg" alt="" />
              <div className="py-4 px-6">
                <h2 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-xl sm:text-2xl tracking-tight">Back-End Development</h2>
                <p className="hover:cursor-pointer py-2 text-gray-600 leading-5">Node.js, Python, MongoDB, MySQL, Express.js, and Django - Discover the magic of server-side programming and build scalable web applications.</p>
              </div>
            </div>


            <div className="w-full sm:w-80 mb-4 rounded-lg bg-white shadow-lg ring-2 ring-transparent transition-colors hover:bg-blue-100 ">
              <img className="rounded-t-lg w-full h-48 sm:h-64 object-cover" src="src/assets/freepik3.jpg" alt="" />
              <div className="py-4 px-6">
                <h2 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-xl sm:text-2xl tracking-tight">Becoming a Full-Stack Developer</h2>
                <p className="hover:cursor-pointer py-2 text-gray-600 leading-5">Front-end to back-end, APIs, development tools, and optimization - Elevate your coding skills and become a versatile web development maestro.</p>
              </div>
            </div>

          </div>
        </div>
      </div>



      <div className="bg-slate-100 py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">

            <div className="flex flex-col items-center justify-center rounded-lg bg-gray-200 p-4 lg:p-8">
              <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">50+</div>
              <div className="text-sm font-semibold sm:text-base">Webinar</div>
            </div>


            <div className="flex flex-col items-center justify-center rounded-lg bg-gray-200 p-4 md:p-8">
              <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">5000+</div>
              <div className="text-sm font-semibold sm:text-base">Attended</div>
            </div>


            <div className="flex flex-col items-center justify-center rounded-lg bg-gray-200 p-4 md:p-8">
              <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">400+</div>
              <div className="text-sm font-semibold sm:text-base">Hours</div>
            </div>



            <div className="flex flex-col items-center justify-center rounded-lg bg-gray-200 p-4 md:p-8">
              <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">6000+</div>
              <div className="text-sm font-semibold sm:text-base">Subscriber</div>
            </div>

          </div>
        </div>
      </div>





      <div id="review" className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8 md:mt-16 md:mb-16">
          <h2 className="mb-16 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">What others say about us</h2>

          <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">

            <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
              <div className="text-center text-gray-600">“The webinar on web development conducted by John was exceptional. He explained complex concepts in a simple and engaging manner. I learned a lot and feel more confident in my web development skills now.”</div>

              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                  <img src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112" loading="lazy" alt="Photo by Radu Florin" className="h-full w-full object-cover object-center" />
                </div>

                <div>
                  <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">Sarah Thompson</div>
                  <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">Lead Developer / TechPro Solutions</p>
                </div>
              </div>
            </div>



            <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8 ">
              <div className="text-center text-gray-600">“I thoroughly enjoyed the webinar hosted by Michael. His expertise in web development is evident, and he shared valuable insights and tips. It was a great learning experience, and I would highly recommend it to others.”</div>

              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                  <img src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112" loading="lazy" alt="Photo by christian ferrer" className="h-full w-full object-cover object-center" />
                </div>

                <div>
                  <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">Kate Berg</div>
                  <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">Chief Technology Officer / InnovateX</p>
                </div>
              </div>
            </div>



            <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
              <div className="text-center text-gray-600">Attending Emily's webinar on web development was a game-changer for me. His knowledge and passion for the subject were inspiring. The practical examples and hands-on helped me improve my coding skills.”</div>

              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                  <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500" loading="lazy" alt="Photo by Ayo Ogunseinde" className="h-full w-full object-cover object-center" />
                </div>

                <div>
                  <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">Greg Jackson</div>
                  <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">Frontend Developer / CodeCrafters</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-slate-900 text-slate-300">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <img src="src/assets/zen.png" alt="Logo" className="h-8 w-auto brightness-0 invert" />
              <p className="mt-3 text-sm">
                Webinars and courses to level up your web development skills.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Product</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-sm hover:text-white">Features</a></li>
                <li><a href="#" className="text-sm hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-sm hover:text-white">Webinars</a></li>
                <li><a href="#" className="text-sm hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-sm hover:text-white">About</a></li>
                <li><a href="#" className="text-sm hover:text-white">Blog</a></li>
                <li><a href="#" className="text-sm hover:text-white">Careers</a></li>
                <li><a href="#" className="text-sm hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Legal</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-sm hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-sm hover:text-white">Terms</a></li>
                <li><a href="#" className="text-sm hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-700/50 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-500 hover:text-white" aria-label="Twitter">
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-white" aria-label="GitHub">
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-white" aria-label="LinkedIn">
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default App
