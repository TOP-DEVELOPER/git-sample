import {
  Button,
  CardMedia,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "77vh",
    justifyContent: "space-around",
    [theme.breakpoints.between("xs", "sm")]: {
      flexDirection: "column",
      justifyContent: "none",
      width: "100%",
      height: "100vh",
      marginTop: "5%",
    },
  },

  imageContainer: {
    width: "48%",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "100%",
      height: "50vh",
    },
  },

  img: {
    width: "100%",
    height: "100%",
  },

  formContainer: {
    width: "49%",
    height: "100%",
    textAlign: "centre",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "100%",
    },
  },

  form: {
    // border: "1px solid red",
    height: "60vh",
    marginTop: "10%",
  },

  title: {
    marginLeft: "35%",
    [theme.breakpoints.between("xs", "sm")]: {
      marginLeft: "22%",
    },
  },

  input: {
    width: "50%",
    marginLeft: "25%",
    [theme.breakpoints.between("xs", "sm")]: {
      marginLeft: "22%",
      width: "60%",
    },
  },

  register: {
    width: "20%",
    marginLeft: "30%",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "30%",
      marginLeft: "25%",
    },
  },

  li: {
    marginLeft: "5%",
    textDecoration: "none",
  },
  all: {
    textAlign: "centre",
    marginLeft: "35%",
    [theme.breakpoints.between("xs", "sm")]: {
      marginLeft: "25%",
    },
  },
  sign: {
    marginLeft: "45%",
  },

  signLi: {
    textDecoration: "none",
  },
}));

function SignUpForm(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <CardMedia
            className={classes.img}
            image="https://cdn.dribbble.com/users/1292088/screenshots/14802334/media/c58dcd369416e4d6e2bf2727f8bd821f.jpg?compress=1&resize=800x600"
            title="signup"
          />
        </div>
        <div className={classes.formContainer}>
          <form
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={props.SignUpSubmit}
          >
            <Typography className={classes.title} varient="h1" color="primary">
              SIGNUP TO S H O P P I N G
            </Typography>
            <TextField
              className={classes.input}
              margin="normal"
              type="text"
              id="outlined-name"
              label="Name"
              variant="outlined"
              onChange={props.updateName}
              required
            />
            <br />
            <TextField
              className={classes.input}
              margin="normal"
              type="email"
              id="outlined-email"
              label="Email"
              variant="outlined"
              onChange={props.updateEmail}
              required
            />
            <br />
            <TextField
              className={classes.input}
              margin="normal"
              type="text"
              id="outlined-phone"
              label="Phone"
              variant="outlined"
              onChange={props.updatePhone}
              required
            />
            <br />
            <TextField
              className={classes.input}
              margin="normal"
              type="password"
              id="outlined-password"
              label="Password"
              variant="outlined"
              onChange={props.updatePassword}
              required
            />
            <br />
            <Typography className={classes.all} varient="subtitle2">
              Already have an account?
            </Typography>
            <Link className={classes.signLi} to="/signIn">
              <Typography
                className={classes.sign}
                color="primary"
                varient="subtitle1"
              >
                SignIn
              </Typography>
            </Link>

            <Button
              className={classes.register}
              type="submit"
              margin="normal"
              variant="contained"
              color="primary"
              id="SignUpBtn"
            >
              Register
            </Button>
            <Link className={classes.li} to="/">
              <Button
                margin="normal"
                variant="contained"
                color="primary"
                id="backBtn"
              >
                BACK
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;

// {
//   /* <form onSubmit={props.SignUpSubmit}>
//           <label htmlFor="SignUpName">
//             Name<span>* </span>{" "}
//           </label>
//           <input
//             type="text"
//             name="SignUpName"
//             onChange={props.updateName}
//             placeholder="Name"
//             required
//           />

//           <label htmlFor="SignUpEmail">
//             Email<span>* </span>{" "}
//           </label>
//           <input
//             type="email"
//             name="SignUpEmail"
//             onChange={props.updateEmail}
//             placeholder="random@gmail.com"
//             required
//           />

//           <label htmlFor="SignUpPhone">
//             Phone<span>* </span>{" "}
//           </label>
//           <input
//             type="tel"
//             name="SignUpPhone"
//             onChange={props.updatePhone}
//             placeholder="1644"
//             required
//           />
//           <label htmlFor="SignUpPassword">
//             Password<span>* </span>{" "}
//           </label>
//           <input
//             type="password"
//             name="SignUpPassword"
//             onChange={props.updatePassword}
//             placeholder="Pass@123"
//             required
//           />

//           <button type="submit">Register</button>
//         </form> */
// }
