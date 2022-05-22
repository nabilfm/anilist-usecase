import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    try {
      window.flutter_inappwebview.callHandler('enableButton').then(function (result: any) {
        // print to the console the data coming
        // from the Flutter side.
        console.log(JSON.stringify(result))
      })
    } catch (e) {
      console.warn(`error: ${e.toString()}`)
    }
  }, [])
  return <div>test</div>
}
