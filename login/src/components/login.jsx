import React from 'react'

function login() {
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="data:image/png;base64,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"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default login