GP-89: Write the readme file 

Workspace: Collecting workspace informationHere is a suggested `README.md` file for the `particles_demo` project:

```markdown
# Particles Demo

A visually engaging web application that uses `tsParticles` to create interactive particle effects. This project also includes features like theme toggling, scroll animations, and a responsive contact form.

## Features

- **Interactive Particle Effects**: Powered by `tsParticles`, with customizable colors and behaviors.
- **Theme Toggle**: Switch between light and dark modes, with particle colors adapting to the selected theme.
- **Scroll Animations**: Smooth animations for elements as they come into view.
- **Scroll Indicator**: A progress bar at the top of the page showing the scroll position.
- **Responsive Design**: Fully responsive layout for various screen sizes.
- **Contact Form**: A functional form with client-side validation and reset functionality.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/GP-89/particles_demo.git
   cd particles_demo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the application in your browser at `http://localhost:3000`.

## File Structure

```
particles_demo/
├── .gitignore
├── index.html
├── package.json
├── public/
│   └── vite.svg
├── src/
│   ├── counter.js
│   ├── javascript.svg
│   ├── main.js
│   └── style.css
```

- **`index.html`**: The main HTML file for the application.
- **`src/main.js`**: Contains the JavaScript logic for initializing `tsParticles`, theme toggling, animations, and form handling.
- **`src/style.css`**: Styles for the application, including light and dark mode themes.
- **`public/`**: Static assets like images and icons.

## Usage

### Theme Toggle
- Click the theme toggle button to switch between light and dark modes.
- The application remembers your preference using `localStorage`.

### Particle Effects
- The particles adapt to the selected theme, changing colors dynamically.

### Contact Form
- Fill out the form and submit it to see a success message.
- The form resets automatically after submission.

### Scroll Indicator
- A progress bar at the top of the page shows how far you've scrolled.

## Technologies Used

- **[tsParticles](https://github.com/matteobruni/tsparticles)**: For particle effects.
- **HTML/CSS/JavaScript**: Core web technologies.
- **Vite**: Development server and build tool.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the `tsParticles` library for making particle effects easy to implement.
- Inspired by modern web design practices.

---
Enjoy the demo and feel free to customize it for your own projects!
```
