module.exports = {
  // your community or team name to display on join page.
  community: process.env.COMMUNITY_NAME || 'IV Devs',
  // your slack team url (ex: socketio.slack.com)
  slackUrl: process.env.SLACK_URL || 'ivdevs.slack.com',
  // access token of slack
  // You can generate it in https://api.slack.com/web#auth
  // You should generate the token in admin user, not owner.
  // If you generate the token in owner user, missing_scope error will be occurred.
  //
  // You can test your token via curl:
  //   curl -X POST 'https://YOUR-SLACK-TEAM.slack.com/api/users.admin.invite' \
  //   --data 'email=EMAIL&token=xoxp-13346603558-13350392466-13833830320-da062f28dd&set_active=true' \
  //   --compressed
  slacktoken: process.env.SLACK_TOKEN || 'xoxp-13346603558-13350392466-13833830320-da062f28dd'
};
