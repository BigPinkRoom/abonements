export default async function ({ $services, $auth, $showError, redirect }) {
  let user = null;

  if (process.server) {
    user = await $services.auth.getCurrentUser();
  } else {
    user = $auth.$storage.getUniversal('user');
  }

  const blockConditions = [!user, user?.user_role !== 'employee'].includes(true);

  if (blockConditions) {
    $showError('Access denied');

    redirect('/login');
  }
}
