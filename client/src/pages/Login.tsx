import type { FC } from "react";
// import { LockClosedIcon } from '@heroicons/react/20/solid'
// import { Link } from "react-router-dom";

// import logo from "assets/images/icons/logo.png";
// import InputField from "components/Common/InputField";



// const Login: FC = () => {


//     return <div className="container mx-auto">
//         <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//             <div className="w-full max-w-md space-y-8">
//                 <div>
//                     <img
//                         className="mx-auto h-20 w-auto cursor-pointer"
//                         src={logo}
//                         alt="Your Company"
//                     />
//                     <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
//                         Sign in to your account
//                     </h2>
//                     <p className="mt-2 text-center text-sm text-gray-600">
//                         Or{' '}
//                         <Link className="font-medium underline text-indigo-600 hover:text-indigo-500" to="/register">
//                             register
//                         </Link>
//                     </p>
//                 </div>
//                 <form className="mt-8 space-y-6" action="#" method="POST">
//                     <input type="hidden" name="remember" defaultValue="true" />
//                     <div className="-space-y-px rounded-md shadow-sm">
//                         <div>
//                             <label htmlFor="email-address" className="sr-only">
//                                 Email address
//                             </label>
//                             <InputField
//                                 id="email-address"
//                                 type="email"
//                                 autoComplete="email"
//                                 className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//                                 placeholder="Email address"
//                                 register={register = true}
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="password" className="sr-only">
//                                 Password
//                             </label>
//                             <InputField
//                                 id="password"
//                                 name="password"
//                                 type="password"
//                                 autoComplete="current-password"
//                                 className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//                                 placeholder="Password"
//                             />
//                         </div>
//                     </div>

//                     <div className="flex items-center justify-between">
//                         <div className="text-sm">
//                             <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
//                                 Forgot your password?
//                             </a>
//                         </div>
//                     </div>

//                     <div>
//                         <button
//                             type="submit"
//                             className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                         >
//                             <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//                                 <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
//                             </span>
//                             Sign in
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>
// }

// export default Login;