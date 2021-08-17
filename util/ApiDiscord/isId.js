module.exports = async (req, id) => {
  try {
    const dataID = await req.bot.users.fetch(id)
    if(dataID.bot) return dataID;
    else return false;
  } catch(error) {
    return false
  }
}