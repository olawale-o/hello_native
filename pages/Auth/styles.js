import { StyleSheet } from 'react-native';

 const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    padding: 20,
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  headerText: {
    fontSize: 20,
  },
  
  socialButton: {
    borderRadius: 10,
    marginVertical: 25,
    backgroundColor: '#F3F3F3',
  },
  
  socialButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    opacity: 0.45,
    alignItems: 'center',
    padding: 10,
  },
  
  buttonText: {
    color: '#000',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
  },
  
  formContainer: {},
  
  inputContainer: {
    paddingVertical: 5,
  },
  
  label: {
    fontWeight: 'bold',
  },
  
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#eee',
    paddingHorizontal: 10,
  },

  checkboxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  
  loginButton: {
    backgroundColor: '#008AFF',
    paddingVertical: 10,
    borderRadius: 15,
  },
  
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
    
  forgotPasswordContainer: {
    paddingVertical: 20,
  },
  
  linkText: {
    color: '#008AFF',
  },
  
  signupContainer: {
    display: 'flex',
    alignItems: 'center',
  }
});

export default styles;
