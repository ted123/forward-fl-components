# Team Forward FL Components

A sample component library made with React & Bit

## Getting Started
1. Install Bit using the following commands:
```bash
    npm i -g @teambit/bvm   # install bvm
    bvm install   # use bvm to install bit
```
2. Create component using this command:
```bash
    bit create react ui/<component-name>
```
3. For styling a component, create a `style.ts` file inside the component folder and use styled-components (See hello-world component for reference).
4. Run the component using this command:
```bash
    bit start
```
5. For installing 3rd party dependencies to component, execute this command:
```bash
    bit install <3rd-party-component>
```

## Testing Components
- Test file is auto-generated as soon as the component is created ex: `hello-world.spec.tsx`. To run the test locally use: `bit test`

## Deployment
- Currently using manual command for component deployment. WIP

## Contributing
- For updating/creating new components, create a new branch in the repository with the following format: `component-<component-name>` ex: `component-hello-world` for new components and create a pull request once done.
- Contact ted123 to get added as collaborator.

## Need help?
- Contact ted123
## Other Resources
- React: https://reactjs.org/tutorial/tutorial.html
- Bit commands: https://harmony-docs.bit.dev/reference/commands/
- styled-components: https://styled-components.com/docs/basics