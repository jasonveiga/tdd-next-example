# Next.js + Test-driven-development example

This is a small example project showing a bit of test-driven development for a
React component. It was bootstrapped with TypeScript using the following
command:

```
npx create-next-app tdd-example --use-npm --ts
```

In addition, some test code for Next.js pages was copied from
[this example](https://github.com/vercel/next.js/tree/canary/examples/with-jest).

The directory structure uses the optional `src` directory at the root of the
project. Under it are `pages` and `components` directories.

# Getting Started

1. Clone this repo
2. Install deps: `npm install`
3. Launch dev server: `npm start dev`
4. Navigate to
   [http://localhost:3000/date-display-test](http://localhost:3000/date-display-test)
5. (Optional) From the command-line, launch Jest in "watch" mode:
   `npx jest --watch`. This will allow you to see the results change as you work
   through test-driven development.

# Working Through the Example

There are three tags defined. Each tag can be checked out in order to see the
effects on test results and the live development page.

- `skeleton`: This shows the notional `DateDisplay` component, which as the name
  implies simply displays the date. At this point, it does nothing functional
  and no test is yet defined. Only component properties are defined. There's
  also the `date-display-test` showing how it renders. At this point the page
  should be blank.
- `failing`: At this point, we've defined at test that checks to see we're
  rendering the default value (current date) as expected. Since `DateDisplay`
  contains no implementation yet, this will fail.
- `passing`: This implementation uses [date-fns](https://date-fns.org/) to
  format the date and return the string
