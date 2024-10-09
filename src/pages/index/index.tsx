import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import Search from './search'
import './index.scss'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      我是小程序
      <Search />
      <Text></Text>
    </View>
  )
}
