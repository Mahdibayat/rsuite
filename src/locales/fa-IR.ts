import faIR from 'date-fns/locale/fa-IR';

const Calendar = {
    sunday: '۱شنبه',
    monday: '۲شنبه',
    tuesday: '۳شنبه',
    wednesday: '۴شنبه',
    thursday: '۵شنبه',
    friday: 'جمعه',
    saturday: 'شنبه',
    ok: 'تایید',
    today: 'امروز',
    yesterday: 'یروز',
    hours: 'ساعات',
    minutes: 'دقیقه',
    seconds: 'ثانیه',
    formattedMonthPattern: 'YYYY / MM',
    formattedDayPattern: 'YYYY/MM/DD',
    dateLocale: faIR as any
};

export default {
    common: {
        loading: 'درحال برسی',
        emptyMessage: 'نتیجه ای یافت نشد'
    },
    Plaintext: {
        unfilled: 'بدون محتوا',
        notSelected: 'انتخاب نشده',
        notUploaded: 'بارگذاری نشده'
    },
    Pagination: {
        more: 'بیشتر',
        prev: 'قبل',
        next: 'بعد',
        first: 'اول',
        last: 'آخر',

        limit: 'صفحه / {0}',
        total: 'کل: {0}',
        skip: 'رد شدن {0}'
    },
    Calendar,
    DatePicker: {
        ...Calendar
    },
    DateRangePicker: {
        ...Calendar,
        last7Days: '۷ روز گذشته'
    },
    Picker: {
        noResultsText: 'نتیجه ای یافت نشد',
        placeholder: 'انتخاب',
        searchPlaceholder: 'جستجو',
        checkAll: 'انتخاب همه'
    },
    InputPicker: {
        newItem: 'ایجاد گزینه جدید',
        createOption: 'ایجاد گزینه "{0}"'
    },
    Uploader: {
        inited: 'تم البدء',
        progress: 'جاري الرفع',
        error: 'خطا',
        complete: 'تکمیل شد',
        emptyFile: 'فایلی انتخاب نشده',
        upload: 'بارگذاری فایل'
    },
    CloseButton: {
        closeLabel: 'بستن'
    },
    Breadcrumb: {
        expandText: 'توضیح بیشتر'
    },
    Toggle: {
        on: 'روشن',
        off: 'خاموش'
    }
};
