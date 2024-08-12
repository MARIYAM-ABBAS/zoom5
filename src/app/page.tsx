import React from 'react'

const page = () => {
  return (
    <div><figure className="md:flex bg-red-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/mariyam.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
        ”I would describe my self as an open and honest person who does not 
         believe in misleading other people and tries to be fair in everything 
       i do .”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          mariyam abbas
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Staff Engineer, school
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page