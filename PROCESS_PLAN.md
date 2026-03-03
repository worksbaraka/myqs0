# myQS Workflow Plan (Editable)

## 1) Roles
- Client: posts job, negotiates only with Admin, agrees with admin on price, downloads invoice of agreed amount if he accepts or the admin accept, pays agreed amount, downloads approved deliverable after payment.
- QS: submits initial offer to Admin, waits for Admin assignment, claims assigned job, uploads deliverable.
- Admin: mediates pricing, finalizes agreed amount, assigns QS, reviews deliverable, approves deliverable from the qs to be visible to the client side upon client payment manages payment.

---

## 2) Core Rules (Non-Negotiable)
- QS cannot see Admin-Client negotiation history or Admin offer to Client.
- Client cannot see QS offer/history.
- Client negotiates only with Admin.
- Admin must assign a QS before that QS can claim.
- QS must claim assigned task before uploading deliverable.
- Client can download deliverable only after:
  - Admin approved submission
  - Client payment marked received
- Invoice is generated after agreement and downloadable by Client/Admin.

---

## 3) End-to-End Process

### Phase A: Job Creation
1. Client registers/logs in.
2. Client creates job and uploads task file.
3. System status: `open`.

### Phase B: Pricing Mediation
1. QS submits initial offer (visible to Admin, hidden from Client).
2. Admin sends offer to Client (may include facilitation margin).
3. Client can:
   - accept admin offer, or
   - send counter offer.
4. Admin can:
   - accept latest client counter as final, or
   - propose another offer.
5. On finalization:
   - agreed/client payable amount saved,
   - QS initial amount saved,
   - admin margin computed,
   - invoice generated,
   - status: `agreed`.

### Phase C: Assignment + Claim
1. Admin assigns specific QS.
2. Assigned QS claims task.
3. Status: `in_progress`.

### Phase D: Delivery
1. Claimed QS uploads deliverable.
2. Status: `submitted`.
3. Admin reviews and either:
   - approves (status `payment_pending`), or
   - rejects (status `in_progress`).

### Phase E: Payment + Release
1. Admin marks client payment received.
2. Admin pays QS initial offer.
3. Client can now download approved deliverable.
4. Final status: `paid`.

---

## 4) Status Lifecycle
- `open`
- `negotiating`
- `agreed`
- `in_progress`
- `submitted`
- `payment_pending`
- `paid`

---

## 5) Visibility Matrix

| Data/Event | Client | QS | Admin |
|---|---|---|---|
| QS offer | No | Yes (own/system scope) | Yes |
| Admin offer to client | Yes | No | Yes |
| Client counter/accept | Yes | No | Yes |
| Final agreement amount | Yes | No direct admin-client negotiation details | Yes |
| Assignment details | Yes (assignee name) | Yes | Yes |
| Submission review notes | Limited business visibility | Limited | Yes |
| Payment details | Client payable status | QS payout relevance | Yes |

---

## 6) Current Implemented Routes (Summary)
- Auth: `/register`, `/login`, `/logout`
- Dashboards: `/client/dashboard`, `/qs/dashboard`, `/admin/dashboard`
- Job creation: `/client/jobs/new`
- Negotiation page: `/jobs/<job_id>/negotiation`
- QS offer: `/jobs/<job_id>/offers/qs`
- Admin offer: `/jobs/<job_id>/offers/admin`
- Client counter/accept:
  - `/jobs/<job_id>/offers/client-counter`
  - `/jobs/<job_id>/offers/client-accept`
- Agreement:
  - `/jobs/<job_id>/agreement/finalize`
  - `/jobs/<job_id>/agreement/accept-client-counter`
- Invoice download: `/jobs/<job_id>/invoice/download`
- Assignment/claim:
  - `/jobs/<job_id>/assign`
  - `/jobs/<job_id>/claim`
- Submission:
  - `/jobs/<job_id>/submissions/new`
  - `/jobs/<job_id>/submissions/<submission_id>/approve`
  - `/jobs/<job_id>/submissions/<submission_id>/reject`
  - `/jobs/<job_id>/submissions/<submission_id>/download`
- Payment:
  - `/jobs/<job_id>/payments/client-paid`
  - `/jobs/<job_id>/payments/pay-qs`
- Inbox:
  - `/inbox`
  - `/inbox/open/<event_id>`
  - `/inbox/mark-read/<event_id>`
  - `/inbox/mark-all-read`

---

## 7) Open Items / Future Improvements
- Add PDF invoice format (instead of text invoice).
- Add explicit “deliver to client” action after payment.
- Add assignment audit log panel in Admin dashboard.
- Add automated email/WhatsApp notifications per event.
- Add soft-delete/archive for jobs.
- Add test suite for role visibility/privacy rules.

---

## 8) Change Log (Editable)
- [YYYY-MM-DD] Added:
- [YYYY-MM-DD] Modified:
- [YYYY-MM-DD] Removed:
