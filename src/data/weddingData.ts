export type Language = 'en' | 'bn';

export interface WeddingCopy {
  plaqueNames: string;
  plaqueDate: string;
  openGate: string;
  replayGate: string;
  eyebrowTop: string;
  groomFirst: string;
  brideFirst: string;
  inviteLines: [string, string];
  heroDay: string;
  heroDate: string;
  heroLocation: string;
  countdownEyebrow: string;
  countdownTitle: string;
  countdownUnits: [string, string, string, string];
  countdownCaption: string;
  countdownDone: string;
  celebEyebrow: string;
  celebTitle: string;
  openInMaps: string;
  addToCalendar: string;
  famEyebrow: string;
  famTitleLines: [string, string];
  groomRole: string;
  brideRole: string;
  groomParents: [string, string];
  brideParents: [string, string];
  ardenCity: string;
  lakesideCity: string;
  venueEyebrow: string;
  venueTitle: string;
  venueAddressTitle: string;
  venueEveningLines: [string, string];
  venueParkingLines: [string, string];
  closingTitleLines: [string, string];
  closingMessage: string;
  closingSignoff: string;
  footerCredit: string;
}

export const WEDDING_DATE = new Date('2026-12-12T19:00:00');

export const RAGA_NOTES = [
  261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 440.0, 392.0, 329.63, 293.66,
];

export const COPY: Record<Language, WeddingCopy> = {
  en: {
    plaqueNames: 'Mayesha & Emon',
    plaqueDate: '12 · 04 · 2027',
    openGate: 'Tap to open the gate',
    replayGate: 'Gate',
    eyebrowTop: 'Together with their families',
    groomFirst: 'Emon',
    brideFirst: 'Mayesha',
    inviteLines: ['request the joy of your', 'company at their wedding'],
    heroDay: 'SATURDAY',
    heroDate: '12 March 2027',
    heroLocation: 'Arden, Lakeside',
    countdownEyebrow: 'Counting the days',
    countdownTitle: 'Until the wedding day',
    countdownUnits: ['Days', 'Hours', 'Minutes', 'Seconds'],
    countdownCaption: 'The wedding · Saturday, 12 December 2026 · 7:00 PM',
    countdownDone: 'The wedding celebration has begun!',
    celebEyebrow: 'The celebrations',
    celebTitle: 'Three days of joy',
    openInMaps: 'Open in Maps',
    addToCalendar: 'Add to Calendar',
    famEyebrow: 'Our families',
    famTitleLines: ['Two homes,', 'one celebration'],
    groomRole: 'The Groom',
    brideRole: 'The Bride',
    groomParents: ['Son of Mr Imtiaz Karim &', 'Mrs Shahana Karim'],
    brideParents: ['Daughter of Mr Faisal Ahmed &', 'Mrs Rumana Ahmed'],
    ardenCity: 'Arden',
    lakesideCity: 'Lakeside',
    venueEyebrow: 'The venue',
    venueTitle: 'The Rose Pavilion',
    venueAddressTitle: 'Garden Avenue, Arden',
    venueEveningLines: [
      'The wedding evening',
      'Saturday, 12 December · 7:00 PM',
    ],
    venueParkingLines: ['Parking is available', 'beside the garden gate.'],
    closingTitleLines: ['We would love', 'to see you there'],
    closingMessage:
      'Your presence will make our celebration complete. Come with your smile and your appetite.',
    closingSignoff: 'With love, the Karim & Ahmed families',
    footerCredit: 'Made with love by Borhan Uddin',
  },
  bn: {
    plaqueNames: 'রেহান ও মেহরিন',
    plaqueDate: '১২ · ১২ · ২০২৬',
    openGate: 'গেট খুলতে ট্যাপ করুন',
    replayGate: 'গেট',
    eyebrowTop: 'উভয় পরিবারের পক্ষ থেকে',
    groomFirst: 'রেহান',
    brideFirst: 'মেহরিন',
    inviteLines: ['আপনাকে আমাদের বিয়ের অনুষ্ঠানে', 'সাদর আমন্ত্রণ জানাচ্ছি'],
    heroDay: 'শনিবার',
    heroDate: '১২ ডিসেম্বর ২০২৬',
    heroLocation: 'আর্ডেন, লেকসাইড',
    countdownEyebrow: 'দিন গণনা',
    countdownTitle: 'বিয়ের দিন পর্যন্ত',
    countdownUnits: ['দিন', 'ঘণ্টা', 'মিনিট', 'সেকেন্ড'],
    countdownCaption: 'শুভ বিবাহ · শনিবার, ১২ ডিসেম্বর ২০২৬ · সন্ধ্যা ৭:০০',
    countdownDone: 'বিয়ের উৎসব শুরু হয়েছে!',
    celebEyebrow: 'উৎসবের আয়োজন',
    celebTitle: 'আনন্দের তিন দিন',
    openInMaps: 'ম্যাপে দেখুন',
    addToCalendar: 'ক্যালেন্ডারে যোগ করুন',
    famEyebrow: 'আমাদের পরিবার',
    famTitleLines: ['দুই বাড়ি,', 'এক উৎসব'],
    groomRole: 'বর',
    brideRole: 'কনে',
    groomParents: ['জনাব ইমতিয়াজ করিম ও', 'বেগম শাহানা করিমের পুত্র'],
    brideParents: ['জনাব ফয়সাল আহমেদ ও', 'বেগম রুমানা আহমেদের কন্যা'],
    ardenCity: 'আর্ডেন',
    lakesideCity: 'লেকসাইড',
    venueEyebrow: 'অনুষ্ঠানস্থল',
    venueTitle: 'দ্য রোজ প্যাভিলিয়ন',
    venueAddressTitle: 'গার্ডেন অ্যাভিনিউ, আর্ডেন',
    venueEveningLines: ['বিয়ের সন্ধ্যা', 'শনিবার, ১২ ডিসেম্বর · সন্ধ্যা ৭:০০'],
    venueParkingLines: ['বাগানের গেটের পাশে', 'পার্কিংয়ের ব্যবস্থা রয়েছে।'],
    closingTitleLines: ['আপনার উপস্থিতি', 'আমাদের আনন্দিত করবে'],
    closingMessage:
      'আপনার সান্নিধ্য আমাদের উৎসবকে পরিপূর্ণ করবে। হাসিমুখে ও আনন্দের সাথে আসুন।',
    closingSignoff: 'ভালোবাসাসহ, করিম ও আহমেদ পরিবার',
    footerCredit: 'ভালোবাসায় নির্মিত · বোরহান উদ্দিন',
  },
};

export interface WeddingEvent {
  id: string;
  dayNum: string;
  month: string;
  weekday: string;
  dayLabel: string;
  name: string;
  description: string;
  time: string;
  venue: string;
  address: string;
  mapsUrl: string;
  calendarTitle: string;
  calendarStart: string;
  calendarEnd: string;
  calendarLocation: string;
}

export const WEDDING_EVENTS: WeddingEvent[] = [
  {
    id: 'gaye-holud',
    dayNum: '10',
    month: 'DEC',
    weekday: 'Thursday',
    dayLabel: 'Day One',
    name: 'Gaye Holud',
    description: 'An afternoon of turmeric, songs and marigolds',
    time: '4:00 PM onwards',
    venue: 'Saffron Court',
    address: 'Lotus Lane, Arden',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Saffron+Court+Lotus+Lane+Arden',
    calendarTitle: 'Gaye Holud — Rehan & Mehrin',
    calendarStart: '20261210T160000',
    calendarEnd: '20261210T210000',
    calendarLocation: 'Saffron Court, Lotus Lane, Arden',
  },
  {
    id: 'biye',
    dayNum: '12',
    month: 'DEC',
    weekday: 'Saturday',
    dayLabel: 'Day Two',
    name: 'Biye',
    description: 'The wedding evening, under a canopy of roses',
    time: '7:00 PM onwards',
    venue: 'The Rose Pavilion',
    address: 'Garden Avenue, Arden',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=The+Rose+Pavilion+Garden+Avenue+Arden',
    calendarTitle: 'Biye — Rehan & Mehrin',
    calendarStart: '20261212T190000',
    calendarEnd: '20261212T233000',
    calendarLocation: 'The Rose Pavilion, Garden Avenue, Arden',
  },
  {
    id: 'bou-bhat',
    dayNum: '14',
    month: 'DEC',
    weekday: 'Monday',
    dayLabel: 'Day Three',
    name: 'Bou-bhat',
    description: 'Welcoming the bride home, with dinner and dear company',
    time: '7:30 PM onwards',
    venue: 'Riverside Hall',
    address: 'Riverside Road, Lakeside',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Riverside+Hall+Riverside+Road+Lakeside',
    calendarTitle: 'Bou-bhat — Rehan & Mehrin',
    calendarStart: '20261214T193000',
    calendarEnd: '20261214T230000',
    calendarLocation: 'Riverside Hall, Riverside Road, Lakeside',
  },
];
