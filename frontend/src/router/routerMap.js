/**
 * 基础路由
 * @type { *[] }
 */
const Receive = () => import("@/views/Receive/index.vue");
const Send = () => import("@/views/Send/index.vue");
const Setting = () => import("@/views/Setting/index.vue");
const Chat = () => import("@/views/Chat/index.vue");
const constantRouterMap = [
    {
      path: "/receive",
      name: "共享",
      meta: {
        title: "receive",
        icon: "wifi",
        keepAlive: true,
        requireAuth: true,
        TabbarShow: true,
      },
      component: Receive,
    },
    {
      path: "/send",
      name: "发送",
      meta: {
        title: "send",
        icon: "send",
        keepAlive: true,
        requireAuth: true,
        TabbarShow: true,
      },
      component: Send,
    },
    {
      path: "/chat",
      name: "讯息",
      meta: {
        title: "chat",
        icon: "message",
        keepAlive: true,
        requireAuth: true,
        TabbarShow: true,
      },
      component: Chat,
    },
    {
      path: "/setting",
      name: "设置",
      meta: {
        title: "setting",
        icon: "setting",
        keepAlive: true,
        requireAuth: true,
        TabbarShow: true,
      },
      component: Setting,
    },
]

export default constantRouterMap