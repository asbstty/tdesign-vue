<template>
  <t-space direction="vertical">
    <t-card :cover="cover" theme="poster2" :style="{ width: '400px' }">
      <template #footer>
        <t-row :align="'middle'" justify="center">
          <t-col flex="auto">
            <t-button block variant="text" shape="square">
              <thumb-up-icon size="24" />
            </t-button>
          </t-col>
          <t-col flex="none">
            <t-divider layout="vertical" />
          </t-col>
          <t-col flex="auto">
            <t-button block variant="text" shape="square">
              <chat-icon size="24" />
            </t-button>
          </t-col>
          <t-col flex="none">
            <t-divider layout="vertical" />
          </t-col>
          <t-col flex="auto">
            <t-button block variant="text" shape="square">
              <share-icon size="24" />
            </t-button>
          </t-col>
        </t-row>
      </template>
    </t-card>
    <br />
    <t-card :cover="cover" theme="poster2" :style="{ width: '400px' }">
      <template #footer>
        <t-button variant="text" shape="square" :style="{ 'margin-right': '8px' }">
          <heart-icon size="16" />
        </t-button>
        <t-button variant="text" shape="square">
          <share-icon size="16" />
        </t-button>
      </template>
      <template #actions>
        <t-dropdown :options="options" :min-column-width="112" @click="clickHandler">
          <t-button variant="text" shape="square">
            <more-icon size="24" />
          </t-button>
        </t-dropdown>
      </template>
    </t-card>
    <br />
    <t-card :cover="cover" theme="poster2" :style="{ width: '400px' }">
      <template #footer>
        <t-avatar-group cascading="left-up" :max="2">
          <t-avatar :image="image" />
          <t-avatar>Q</t-avatar>
          <t-avatar>C</t-avatar>
          <t-avatar>G</t-avatar>
          <t-avatar :icon="icon" />
        </t-avatar-group>
      </template>
      <template #actions>
        <t-dropdown :options="options" :min-column-width="112" @click="clickHandler">
          <t-button variant="text" shape="square">
            <more-icon size="24" />
          </t-button>
        </t-dropdown>
      </template>
    </t-card>
  </t-space>
</template>
<script lang="jsx">
import {
  ThumbUpIcon, ChatIcon, ShareIcon, HeartIcon, MoreIcon, UserIcon,
} from 'tdesign-icons-vue';
import { MessagePlugin } from 'tdesign-vue';

export default {
  components: {
    ThumbUpIcon,
    ChatIcon,
    ShareIcon,
    HeartIcon,
    MoreIcon,
  },
  data() {
    return {
      cover: 'https://tdesign.gtimg.com/site/source/card-demo.png',
      infoMessage: `这是一段很长很长很长很长很长很长很长很长很长很长很长很长
  很长很长很长很长很长很长很长很长很长很长很长很长很长很长
  很长很长很长很长很长很长很长很长很长很长很长很长很长很长
  很长很长很长很长很长很长很长很长很长很长很长的内容示例。`,
      image: 'https://tdesign.gtimg.com/site/avatar-boy.jpg',
      options: [
        {
          content: '操作一',
          value: 1,
        },
        {
          content: '操作二',
          value: 2,
        },
      ],
    };
  },
  methods: {
    icon() {
      return <UserIcon />;
    },
    clickHandler(data) {
      MessagePlugin.success(`选中【${data.content}】`);
    },
  },
};
</script>
