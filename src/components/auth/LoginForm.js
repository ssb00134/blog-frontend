import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from './AuthForm';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm;
=======
import auth, { changeField, initializeForm } from '../../modules/auth';
import AuthForm from './AuthForm';

const LoginForm = ()=>{
    const dispatch = useDispatch();
    const {form} = useSelector(({auth})=>({
        form : auth.login
    }));

    const onChange = e=>{
        const {value, name} = e.target;
        dispatch(
            changeField({
                form : 'login',
                key : name,
                value
            })
        );
    }
    
    const onSubmit = e=>{
        e.preventDefault();
    }
    
    useEffect(()=>{
        dispatch(initializeForm('login'));
    },[dispatch]);

    return (
        <AuthForm
        type="login"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}/>
    )
}

export default LoginForm;




>>>>>>> eb990b350175a89f94ce336362c2869c5efef5a9
