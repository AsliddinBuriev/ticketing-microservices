import { App } from './app';
const { app } = new App();



const PORT =  process.env.PORT || 3000;
app.listen(PORT, async () => {
    console.log(
      `Server running on port ${PORT}`
    );
  }
);