/*
placeholder for some modular functions that might be used

example

export const findFolder = (folders = [], folderid) =>
  folders.find(folder => folder.id === folderid)

export const findNote = (notes = [], noteId) =>
  notes.find(note => note.id === noteId)



export const getResultsForSearch = (results = [], query) => (
  (!folder_id)
    ? results
    : results.filter(result => result.query === query)
)

*/

export const getMessagesForUser = (allMessages = [], recMsgs = [], userMessages) => (
  (!recMsgs)
    ? allMessages
    : (
      recMsgs.forEach(recMsg => {
        console.log('allMessages:')
        console.log(allMessages)
        console.log('recMsg:')
        console.log(recMsg)

        allMessages.forEach(message => {
          console.log('check msg: ')
          console.log(message)

          if (message.id === parseInt(recMsg)) {
            console.log('pushing:')
            console.log(message)

            userMessages.push(message)
          } else {
            console.log('no match')
          }
          console.log(userMessages);

        })
      }))
      
)