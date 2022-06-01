import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon , AnnotationIcon } from '@heroicons/react/solid'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({title}) {
  return (
    <Menu as="div" className="relative text-left z-50">
      <div>
        <Menu.Button className="inline-flex justify-center w-full  shadow-sm px-4 py-2  text-sm font-medium text-white ">
          {title == "Logo" 
          ? <AnnotationIcon className="h-5 w-5" aria-hidden="true" />
          : <p className='font-bold'>{ title || "element"}</p>
          }
        </Menu.Button>        
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className=" absolute min-h-[200px] w-[600px] right-0 rounded-md  bg-green-400 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}



function leftOrRight () {

}