import React from 'react';

const useLoginForm = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [verified, setIsVerified] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (email.length === 0) {
      setIsVerified(false);
    }
    if (password.length === 0) setIsVerified(false);
  }, [email, password]);

  return { email, password, setEmail, setPassword, verified };
};

export default useLoginForm;
