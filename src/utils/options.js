
export const imageSizeOptions = [{ label: "Full", value: "full" }, { label: "Custom", value: "custom" }];
export const inputFieldOptions = [{ label: "Username", value: "username" }, { label: "Email", value: "email" }, { label: "Password", value: "password" }, { label: "Confirm Password", value: "confirmpassword" }, { label: "First Name", value: "firstname" }, { label: "Last Name", value: "lastname" }, { label: "Website", value: "website" }];

export const addInputFieldOptions = {
  type: "username",
  label: { "text": "" },
  placeholder: { "text": "" },
  required: false,
  width: { "desktop": "100%", "tablet": "100%", "mobile": "100%" },
  device: "desktop",
  icon: { "url": "" }
}
export const userRoleOptions = [
  { label: "Default", value: "default" },
  { label: "Editor", value: "editor" },
  { label: "Author", value: "author" },
  { label: "Contributor", value: "contributor" },
  { label: "Subscriber", value: "subscriber" }
]

export const justifyContent = [{ label: "Start", value: "start" }, { label: "End", value: "end" }, { label: "Center", value: "center" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }, { label: "Space Evenly", value: "space-evenly" }]

export const alignItems = [{ label: "Start", value: "start" }, { label: "End", value: "end" }, { label: "Center", value: "center" }, { label: "Stretch", value: "stretch" }, { label: "Baseline", value: "baseline" }, { label: "Space Evenly", value: "space-evenly" }]


export const defaultUserMail = `<p>Thank you for registering on "gutenberg plugin development"!</p>
<p>Username: [username]</p>
<p>Password: [password]</p>
<p>Please click the following address to login to your account:</p>
<p>http://localhost/my-site/wp-admin/post.php/ </p>`

export const defaultAdminMail = `<p>New user registration on your site gutenberg plugin development</p>
<p>Username: [username]</p>
<p>Email: [email]</p>`