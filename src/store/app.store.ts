import { createStore, withProps, setProp, setProps } from '@ngneat/elf'
import { StoreAction, StoreQuery } from '~/store'
import type { Menu, Tab } from '~/types/workspace'

interface State {
  // 系统准备状态
  ready: boolean
  // 侧边栏展开状态
  collapsed: boolean
  // 系统菜单列表
  menus: Menu[]
  // 顶部菜单列表
  headerMenus: Menu[]
  // 侧边菜单列表
  sideMenus: Menu[]
  // 选项卡列表
  tabs: Tab[]
  currentTab?: string
}

const STORE_KEY = 'app'

const appStore = createStore(
  { name: STORE_KEY },
  withProps<State>({
    ready: false,
    collapsed: false,
    // 用户菜单列表
    menus: [],
    headerMenus: [],
    sideMenus: [],
    tabs: [],
  }),
)

/**
 * 查询操作
 */
class AppQuery extends StoreQuery<State> {
  constructor() {
    super(appStore)
  }
}

class AppAction extends StoreAction<State> {
  constructor() {
    super(appStore)
  }

  /**
   * 更新系统状态
   * @param user
   */
  setReady() {
    this.store.update(setProp('ready', true))
  }

  /**
   * 切换侧边栏展开状态
   */
  toggleCollapse() {
    const { collapsed } = this.store.getValue()

    this.store.update(setProp('collapsed', !collapsed))
  }

  /**
   * 切换侧边栏展开状态
   */
  updateMenus(menus: Menu[]) {
    this.store.update(setProp('menus', menus))
  }

  /**
   * 更新顶部菜单
   * @param menus
   */
  updateHeaderMenus(menus: Menu[]) {
    this.store.update(setProp('headerMenus', menus))
  }

  /**
   * 更新侧边菜单
   * @param menus
   */
  updateSideMenus(menus: Menu[]) {
    this.store.update(setProp('sideMenus', menus))
  }

  addTab(tab: Tab) {
    const { tabs } = this.store.getValue()
    this.store.update(
      setProps({
        tabs: [...tabs, tab],
        currentTab: tab.key,
      }),
    )
  }

  deleteTab(key: string) {
    const { tabs } = this.store.getValue()

    if (tabs.length === 1) {
      return
    }

    // 删除已关闭Tab
    this.store.update(
      setProp(
        'tabs',
        tabs.filter((tab) => tab.key !== key),
      ),
    )
  }

  updateCurrentTab(menu: Menu) {
    this.store.update(setProp('currentTab', menu.key))
  }
}

export const appQuery = new AppQuery()
export const appAction = new AppAction()