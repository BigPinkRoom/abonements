export default function ({ $auth, $showError, redirect }) {
  const user = $auth.state.user;

  console.log('middleware user', user);

  if (!user) {
    $showError('Access denied');

    redirect('/login');
  }
}
