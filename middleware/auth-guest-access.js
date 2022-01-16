export default function ({ $services, $auth, $showError, redirect }) {
  const user = Boolean($auth.$storage.getUniversal('user'));

  if (user) {
    $showError('Access denied');

    redirect('/');
  }
}
