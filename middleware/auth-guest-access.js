export default function ({ $auth, $showError, redirect }) {
  const user = $auth.state.user;

  if (user) {
    $showError('Access denied');

    redirect('/');
  }
}
