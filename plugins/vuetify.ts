// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify, type DateInstance, type DefaultsInstance, type DisplayInstance, type GoToInstance, type IconAliases, type IconSet, type LocaleInstance, type LocaleMessages, type LocaleOptions, type ThemeInstance } from 'vuetify'
import type { App } from 'vue'

export default defineNuxtPlugin((app: { vueApp: { use: (arg0: { install: (app: App) => void; defaults: globalThis.Ref<DefaultsInstance>; display: DisplayInstance; theme: ThemeInstance & { install: (app: App) => void }; icons: { defaultSet: string; aliases: Partial<IconAliases>; sets: Record<string, IconSet> }; locale: { isRtl: globalThis.Ref<boolean>; rtl: globalThis.Ref<Record<string, boolean>>; rtlClasses: globalThis.Ref<string>; name: string; messages: globalThis.Ref<LocaleMessages>; current: globalThis.Ref<string>; fallback: globalThis.Ref<string>; t: (key: string, ...params: unknown[]) => string; n: (value: number) => string; provide: (props: LocaleOptions) => LocaleInstance }; date: { options: { adapter: (new (options: { locale: any; formats?: any }) => DateInstance) | DateInstance; formats?: Record<string, any>; locale: Record<string, any> }; instance: { locale?: any; date: (value?: any) => unknown; format: (date: unknown, formatString: string) => string; toJsDate: (value: unknown) => Date; parseISO: (date: string) => unknown; toISO: (date: unknown) => string; startOfDay: (date: unknown) => unknown; endOfDay: (date: unknown) => unknown; startOfWeek: (date: unknown, firstDayOfWeek?: number | string) => unknown; endOfWeek: (date: unknown) => unknown; startOfMonth: (date: unknown) => unknown; endOfMonth: (date: unknown) => unknown; startOfYear: (date: unknown) => unknown; endOfYear: (date: unknown) => unknown; isAfter: (date: unknown, comparing: unknown) => boolean; isAfterDay: (value: unknown, comparing: unknown) => boolean; isSameDay: (date: unknown, comparing: unknown) => boolean; isSameMonth: (date: unknown, comparing: unknown) => boolean; isSameYear: (value: unknown, comparing: unknown) => boolean; isBefore: (date: unknown, comparing: unknown) => boolean; isEqual: (date: unknown, comparing: unknown) => boolean; isValid: (date: any) => boolean; isWithinRange: (date: unknown, range: [unknown, unknown]) => boolean; addMinutes: (date: unknown, amount: number) => unknown; addHours: (date: unknown, amount: number) => unknown; addDays: (date: unknown, amount: number) => unknown; addWeeks: (date: unknown, amount: number) => unknown; addMonths: (date: unknown, amount: number) => unknown; getYear: (date: unknown) => number; setYear: (date: unknown, year: number) => unknown; getDiff: (date: unknown, comparing: unknown, unit?: string) => number; getWeekArray: (date: unknown, firstDayOfWeek?: number | string) => unknown[][]; getWeekdays: (firstDayOfWeek?: number | string) => string[]; getMonth: (date: unknown) => number; setMonth: (date: unknown, month: number) => unknown; getDate: (date: unknown) => number; setDate: (date: unknown, day: number) => unknown; getNextMonth: (date: unknown) => unknown; getPreviousMonth: (date: unknown) => unknown; getHours: (date: unknown) => number; setHours: (date: unknown, hours: number) => unknown; getMinutes: (date: unknown) => number; setMinutes: (date: unknown, minutes: number) => unknown } }; goTo: GoToInstance }) => void } }) => {
  const vuetify = createVuetify({
    components: {

    },
  })
  app.vueApp.use(vuetify)
})