import { Pipe, PipeTransform, signal } from '@angular/core';

@Pipe({
  name: 'i18n',
  standalone: true,
  pure: false,
})
export class I18nPipe implements PipeTransform {
  private static langSignal = signal<'en' | 'de' | 'es'>('en');

  transform(value: { [lang: string]: string }): string {
    const lang = I18nPipe.langSignal();
    return value[lang] || value['en'];
  }

  static setLang(lang: 'en' | 'de' | 'es') {
    I18nPipe.langSignal.set(lang);
  }

  static getLang(): 'en' | 'de' | 'es' {
    return I18nPipe.langSignal();
  }
}
