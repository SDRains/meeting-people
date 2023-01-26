import Link from "next/link";

export default function Home() {
  return (
      <>
          <div className="flex h-screen">
              <div className="m-auto text-center">
                  <h3 className="text-3xl sm:text-5xl font-bold foundersFont">Meeting People is Easy</h3>
                  <div className="flex justify-center">
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-8 pt-8 sm:pt-4 font-light foundersFont text-lg">
                          <Link href="">
                              blog
                          </Link>

                          <Link href="">
                              gallery
                          </Link>

                          <Link href="">
                              contact
                          </Link>

                          <Link href="/about">
                              about
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}