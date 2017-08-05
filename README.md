# React Calendar Icon Badge

A date badge component in the shape of a familiar calendar icon with support for theming and localization.


```
npm install --save react-calendar-icon
```


# Usage

```JSX
import React, { Component } from "react";
import { CalendarIcon } from "react-calendar-icon";

class App extends Component {
  render() {
    return (
      <div>
        <CalendarIcon date={new Date()} />
      </div>
    );
  }
}

export default App;
```

# Date formatting

The `CalendarIcon` component takes an optional prop `options` which can be used to adjust the way the date parts will be formatted. By default, the following configuration is used:

```
{
  header: { weekday: "long" },
  footer: { month: "long" },
  value: { day: "2-digit" },
  locale: []
}
```

The values for the `header`, `footer` and `value` sections of the icon are objects passed to ([Date.prototype.toLocaleDateString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString))


```JSX
import React, { Component } from "react";
import { CalendarIcon } from "react-calendar-icon";

const dateOptions = {
  header: { weekday: "long" },
  footer: { month: "short" },
  value: { day: "2-digit" },
  locale: "nl"
};

class App extends Component {
  render() {
    return (
      <div>
        <CalendarIcon date={new Date()} options={dateOptions} />
      </div>
    );
  }
}

export default App;
```

# Theming

It is possible to customize the look-and-feel of the icon by using a `ThemeProvider` component from `styled-components`. Add a `calendarIcon` member with the following attributes:

```JSX
import React, { Component } from "react";
import { CalendarIcon } from "react-calendar-icon";
import { ThemeProvider } from "styled-components";

const theme = {
  calendarIcon: {
    textColor: "white", // text color of the header and footer
    primaryColor: "#0da472", // background of the header and footer
    backgroundColor: "#fafafa"
  }
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CalendarIcon date={new Date()} />
      </ThemeProvider>
    );
  }
}

export default App;
```
