1. What problem does the context API help solve?

Context API prevents needless 'prop drilling' between components. It allows states and functions be passed directly from one component, to one that could be deeply nested without passing props in between them.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions - These are functions that dispatch uses to tell the reducer which case to handle. The action will provide the reducer with the necessary information for the reducer to run.
Reducers - Are functions that update state based on the action that invokes it. Reducers can have switch functions in them instead of if statements.
Store - Redux uses createStore to build a store and keep states inside. Reducers can be used to then update this state and pass it all over the component tree as needed. Once the store's state is updated, all other components have access to it. The access is granted by use of tags surrounding the .

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

 application state is global, all components have access to it, component state is not unless passed as props.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is middleware and allows us to intercept the flow of our redux state update at the point of the actions. Before the actions pass along the parameters to the reducer, it can run some other functions first. The action will actually use a function as a return.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Working with a large application, redux would be the best use. It is very powerful and helps manage state on a large scale. However, context API is much better for smaller applications. There is no need to use something more complex like redux to handle just a few components. I plan on working for a lager corporation so I will spend more time practicing redux.


